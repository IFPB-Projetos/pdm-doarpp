import { Feather } from "@expo/vector-icons";
import { Image, Text, View } from "react-native";
import { getImageSource } from "../common/getImageSource";

type Props = {
  uri?: string;
  defaultImage?: string;
};

export function ImageInputDisplay({ defaultImage, uri }: Props) {
  if (uri) {
    return <Image source={{ uri }} style={{ height: 200 }} />;
  }

  if (defaultImage) {
    return (
      <Image
        source={getImageSource(defaultImage, 200)}
        style={{ width: undefined }}
      ></Image>
    );
  }

  return (
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
  );
}
