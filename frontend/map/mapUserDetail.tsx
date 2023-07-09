import { Link } from "expo-router";
import { Image, Text, View } from "react-native";
import { getImageSource } from "../common/getImageSource";
import { User } from "../types/user";

type Props = {
  user: User;
};

export function MapUserDetail({ user }: Props) {
  return (
    <View
      style={{
        gap: 10,
        padding: 10,
        flexDirection: "row",
      }}
    >
      <Image
        source={getImageSource(user.id, 100)}
        style={{ borderRadius: 9999 }}
      ></Image>
      <View style={{ flex: 1 }}>
        <Link href={"/users/" + user.id}>
          <Text style={{ fontSize: 18 }}>{user.name}</Text>
        </Link>
        <Text style={{ fontSize: 16 }}>{user.description}</Text>
      </View>
    </View>
  );
}
