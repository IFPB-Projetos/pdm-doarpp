import { Feather } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Image, View } from "react-native";
import { useAuth } from "../auth/authContext";
import { getImageSource } from "./getImageSource";

export type Selected = "home" | "map" | "post" | "user";

type Props = {
  selected: Selected;
};

export function Navbar({ selected }: Props) {
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
        <Feather
          size={30}
          name="home"
          color={selected === "home" ? "black" : "gray"}
        ></Feather>
      </Link>
      <Link href="/map">
        <Feather
          name="map"
          size={30}
          color={selected === "map" ? "black" : "gray"}
        ></Feather>
      </Link>
      <Link href="/posts/create">
        <Feather
          name="plus-square"
          size={30}
          color={selected === "post" ? "black" : "gray"}
        ></Feather>
      </Link>
      {user ? (
        <Link href="/users/me">
          <View>
            <Image
              source={getImageSource(user.image, 29)}
              style={{ borderRadius: 1000, backgroundColor: "#bbb" }}
            ></Image>
          </View>
        </Link>
      ) : (
        <Link href="/login">
          <Feather
            name="user"
            size={30}
            color={selected === "user" ? "black" : "gray"}
          ></Feather>
        </Link>
      )}
    </View>
  );
}
