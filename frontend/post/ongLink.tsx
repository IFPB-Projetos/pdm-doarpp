import { Link } from "expo-router";
import { Image, Text, View } from "react-native";

type Props = {
  ong: Ong;
};

export function OngLink({ ong }: Props) {
  return (
    <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
      <Image
        source={{
          uri: `https://picsum.photos/seed/${ong.id}/40`,
          width: 40,
          height: 40,
        }}
        style={{ borderRadius: 1000 }}
      ></Image>
      <Link href={`/ongs/${ong.id}`}>
        <Text style={{ fontSize: 16, fontWeight: "500" }}>{ong.name}</Text>
      </Link>
    </View>
  );
}
