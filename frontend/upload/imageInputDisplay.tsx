import { Feather } from "@expo/vector-icons";
import { Image, Text, View } from "react-native";
import { getImageSource } from "../common/getImageSource";

type Props = {
  uri?: string;
  value?: string;
};

export function ImageInputDisplay({ value, uri }: Props) {
  if (value) {
    return (
      <Image
        source={getImageSource(value, 200)}
        style={{ width: undefined }}
      ></Image>
    );
  }

  if (uri) {
    return <Image source={{ uri }} style={{ height: 200 }} />;
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
