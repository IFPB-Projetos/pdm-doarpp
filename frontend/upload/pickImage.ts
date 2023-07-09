import { MediaTypeOptions, launchImageLibraryAsync } from "expo-image-picker";

export function pickImage() {
  return launchImageLibraryAsync({
    mediaTypes: MediaTypeOptions.Images,
    base64: true,
  });
}
