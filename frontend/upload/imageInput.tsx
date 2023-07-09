import { AxiosProgressEvent } from "axios";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { ImageInputDisplay } from "./imageInputDisplay";
import { ImageInputProgress } from "./imageInputProgress";
import { pickImage } from "./pickImage";
import { uploadImage } from "./uploadImage";

type Image = string;

type Upload = {
  version: number;
  publicId: string;
  signature: string;
};

type Props = {
  defaultImage?: string;
  onBlur: () => void;
  onChange: (value: Image | Upload) => void;
};

export default function ImageInput({ onBlur, onChange, defaultImage }: Props) {
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
    const upload = await uploadImage(base64!, handleUploadProgress);
    onChange(upload);
  }

  return (
    <TouchableOpacity
      onBlur={onBlur}
      onPress={handlePress}
      style={{
        borderRadius: 10,
        overflow: "hidden",
        backgroundColor: "#bbb",
        justifyContent: "center",
      }}
    >
      <ImageInputDisplay defaultImage={defaultImage} uri={uri} />
      <ImageInputProgress progress={progress} />
    </TouchableOpacity>
  );
}
