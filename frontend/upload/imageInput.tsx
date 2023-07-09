import { AxiosProgressEvent } from "axios";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { ImageInputDisplay } from "./imageInputDisplay";
import { ImageInputProgress } from "./imageInputProgress";
import { pickImage } from "./pickImage";
import { uploadImage } from "./uploadImage";

type Props = {
  value?: string;
};

export default function ImageInput({ value }: Props) {
  const [uri, setUri] = useState<string>();
  const [progress, setProgress] = useState(0);

  function handleUploadProgress(e: AxiosProgressEvent) {
    if (e.total) setProgress(e.loaded / e.total);
  }

  async function handlePress() {
    const result = await pickImage();
    if (result.canceled) return;

    const file = result.assets[0];
    const { uri, base64 } = file;

    setUri(uri);
    const data = await uploadImage(base64!, handleUploadProgress);
    console.log("here", data);
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
      <ImageInputDisplay value={value} uri={uri} />
      <ImageInputProgress progress={progress} />
    </TouchableOpacity>
  );
}
