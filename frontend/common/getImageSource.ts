import { ImageSourcePropType } from "react-native";

export function getImageSource(id: string, size: number): ImageSourcePropType {
  const uri = `https://picsum.photos/seed/${id}/${size}`;
  // const uri =
  //   "https://res.cloudinary.com/dlwoimstk/image/upload/v1688906949/doarpp/gates_znfwcq.png";

  return { uri, width: size, height: size };
}
