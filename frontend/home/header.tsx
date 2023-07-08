import { Link } from "expo-router";
import { View } from "react-native";
import { AuthLink } from "./authLink";

export function Header() {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
      }}
    >
      <Link href="/map">Mapa</Link>
      <View style={{ marginLeft: "auto" }}></View>
      <Link href="/profile">Profile</Link>
      <AuthLink></AuthLink>
    </View>
  );
}
