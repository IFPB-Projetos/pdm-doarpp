import { Feather } from "@expo/vector-icons";
import { Image, Text, View } from "react-native";
import { getImageSource } from "../common/getImageSource";

type Props = {
  uri?: string;
  size?: number;
  defaultImage?: string;
};

export function ImageInputDisplay({ defaultImage, uri, size = 200 }: Props) {
  if (uri) {
    return <Image source={{ uri }} style={{ height: size }} />;
  }

  if (defaultImage) {
    return (
      <Image
        source={getImageSource(defaultImage, size)}
        style={{ width: undefined }}
      ></Image>
    );
  }

  return (
    <View
      style={{
        gap: 8,
        height: size,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Feather name="image" size={24} />
      <Text style={{ fontSize: 16 }}>Selecionar imagem</Text>
    </View>
  );
}
