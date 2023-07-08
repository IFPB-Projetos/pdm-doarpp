import { Link } from "expo-router";
import { Image, View } from "react-native";
import { useAuth } from "../auth/authContext";

export function AuthLink() {
  const { user } = useAuth();

  if (user)
    return (
      <View>
        <Image
          source={{
            uri: `https://picsum.photos/seed/${user.id}/48`,
            width: 48,
            height: 48,
          }}
          style={{ borderRadius: 9999 }}
        ></Image>
      </View>
    );
  else {
    return <Link href="/login">Login</Link>;
  }
}