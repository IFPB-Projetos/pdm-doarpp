import { Link } from "expo-router";
import { Image, Text, View } from "react-native";
import { getImageSource } from "../common/getImageSource";
import { User } from "../types/user";

type Props = {
  user: User;
};

export function UserLink({ user }: Props) {
  return (
    <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
      <Image
        source={getImageSource(user.image, 40)}
        style={{ borderRadius: 1000, backgroundColor: "#bbb" }}
      ></Image>
      <Link href={`/users/${user.id}`}>
        <Text style={{ fontSize: 16, fontWeight: "500" }}>{user.name}</Text>
      </Link>
    </View>
  );
}
