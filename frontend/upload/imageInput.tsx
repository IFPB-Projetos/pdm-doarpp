import { AxiosProgressEvent } from "axios";
import { useState } from "react";
import { Button, Image, Text, View } from "react-native";
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

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Pick an image from camera roll" onPress={handlePress} />
      {uri && (
        <Image source={{ uri: uri }} style={{ width: 200, height: 200 }} />
      )}
      <Text>{progress}</Text>
    </View>
  );
}
