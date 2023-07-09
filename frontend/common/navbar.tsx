import { Feather } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Image, View } from "react-native";
import { useAuth } from "../auth/authContext";

export function Navbar() {
  const height = 40;
  const { user } = useAuth();

  return (
    <View
      style={{
        height,
        gap: 10,
        marginTop: "auto",
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 10,
        justifyContent: "space-around",
      }}
    >
      <Link href="/">
        <Feather name="home" size={30}></Feather>
      </Link>
      <Link href="/map">
        <Feather name="map" size={30}></Feather>
      </Link>
      <Link href="/posts/create">
        <Feather name="plus-square" size={30}></Feather>
      </Link>
      {user ? (
        <Link href="/users/me">
          <View>
            <Image
              source={{
                uri: `https://picsum.photos/seed/${user.id}/40`,
                width: 29,
                height: 29,
              }}
              style={{ borderRadius: 1000 }}
            ></Image>
          </View>
        </Link>
      ) : (
        <Link href="/login">
          <Feather name="user" size={30}></Feather>
        </Link>
      )}
    </View>
  );
}
