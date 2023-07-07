import { Link } from "expo-router";
import { Image, Text, View } from "react-native";

type Props = {
  ngo: Ngo;
};

export function NgoLink({ ngo }: Props) {
  return (
    <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
      <Image
        source={{
          uri: `https://picsum.photos/seed/${ngo.id}/40`,
          width: 40,
          height: 40,
        }}
        style={{ borderRadius: 1000 }}
      ></Image>
      <Link href={`/ngos/${ngo.id}`}>
        <Text style={{ fontSize: 16, fontWeight: "500" }}>{ngo.name}</Text>
      </Link>
    </View>
  );
}
