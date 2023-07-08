import { Link } from "expo-router";
import { Image, Text, View } from "react-native";
import { User } from "../types/user";

type Props = {
  user: User;
};

export function UserLink({ user }: Props) {
  return (
    <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
      <Image
        source={{
          uri: `https://picsum.photos/seed/${user.id}/40`,
          width: 40,
          height: 40,
        }}
        style={{ borderRadius: 1000 }}
      ></Image>
      <Link href={`/users/${user.id}`}>
        <Text style={{ fontSize: 16, fontWeight: "500" }}>{user.name}</Text>
      </Link>
    </View>
  );
}
