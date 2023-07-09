import { ImageSourcePropType } from "react-native";

export function getImageSource(id: string, size: number): ImageSourcePropType {
  const uri = `https://res.cloudinary.com/dlwoimstk/image/upload/c_scale,h_${size}/${id}.webp`;
  return { uri, width: size, height: size };
}
