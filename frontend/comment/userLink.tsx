import { Link } from "expo-router";
import { Image, Text, View } from "react-native";

type Props = {
  user: User;
  size?: number;
};

export function UserLink({ user, size = 40 }: Props) {
  return (
    <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
      <Image
        source={{
          uri: `https://picsum.photos/seed/${user.id}/${size}`,
          width: size,
          height: size,
        }}
        style={{ borderRadius: 1000 }}
      ></Image>
      <Link href={`/users/${user.id}`}>
        <Text style={{ fontSize: 16, fontWeight: "500" }}>{user.name}</Text>
      </Link>
    </View>
  );
}
