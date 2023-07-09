import axios, { AxiosProgressEvent } from "axios";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { Button, Image, Text, View } from "react-native";
import { api } from "../../common/api";
import { UploadAccess } from "./UploadAccess";

const cloudName = "dlwoimstk";
const apiKey = "378278351497316";

export default function ImagePickerExample() {
  const [uri, setUri] = useState<string>();
  const [progress, setProgress] = useState(0);

  function handleUploadProgress(e: AxiosProgressEvent) {
    if (e.total) setProgress(e.loaded / e.total);
  }

  function pickImage() {
    return ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      base64: true,
    });
  }

  async function getSignature() {
    const res = await api.get<UploadAccess>("/upload/signature");
    return res.data;
  }

  async function uploadImage(base64: string) {
    const { signature, timestamp } = await getSignature();

    const data = new FormData();
    data.append("api_key", apiKey);
    data.append("signature", signature);
    data.append("timestamp", "" + timestamp);
    data.append("file", `data:;base64,${base64}`);

    try {
      const uploadRes = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`,
        data,
        {
          onUploadProgress: handleUploadProgress,
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      return uploadRes;
    } catch (error) {
      console.error(JSON.stringify(error));
    }
  }

  async function handlePress() {
    const result = await pickImage();
    if (result.canceled) return;

    const file = result.assets[0];
    const { uri, base64 } = file;

    setUri(uri);
    await uploadImage(base64!);
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
