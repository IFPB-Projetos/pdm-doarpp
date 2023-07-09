import { ImageSourcePropType } from "react-native";

export function getImageSource(id: string, size?: number): ImageSourcePropType {
  return {
    uri: "https://res.cloudinary.com/dlwoimstk/image/upload/v1688906949/doarpp/gates_znfwcq.png",
    width: size,
    height: size,
  };
}
