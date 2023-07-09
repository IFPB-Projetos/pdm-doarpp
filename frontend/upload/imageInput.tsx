import { Feather } from "@expo/vector-icons";
import { AxiosProgressEvent } from "axios";
import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { pickImage } from "./pickImage";
import { uploadImage } from "./uploadImage";

export default function ImageInput() {
  const [uri, setUri] = useState<string>();
  const [progress, setProgress] = useState(0);

  async function handlePress() {
    const result = await pickImage();
    if (result.canceled) return;

    const file = result.assets[0];
    const { uri, base64 } = file;

    setUri(uri);
    const data = await uploadImage(base64!, handleUploadProgress);
    console.log("here", data);
  }

  function handleUploadProgress(e: AxiosProgressEvent) {
    if (e.total) setProgress(e.loaded / e.total);
  }

  function getPercentage() {
    let percentage = 100 * progress;
    if (progress % 1 === 0) return "" + percentage;
    return percentage.toFixed(2);
  }

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{
        backgroundColor: "#bbb",
        borderRadius: 10,
        overflow: "hidden",
        justifyContent: "center",
      }}
    >
      {uri ? (
        <Image source={{ uri: uri }} style={{ height: 200 }} />
      ) : (
        <View
          style={{
            padding: 16,
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
          }}
        >
          <Feather name="image" size={24} />
          <Text style={{ fontSize: 16 }}>Selecionar imagem</Text>
        </View>
      )}
      {!!progress && (
        <Text
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            fontSize: 16,
            color: "white",
            padding: 8,
            backgroundColor: "#0008",
          }}
        >
          {getPercentage()}%
        </Text>
      )}
    </TouchableOpacity>
  );
}
