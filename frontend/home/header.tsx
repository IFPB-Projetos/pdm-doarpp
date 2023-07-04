import { Link } from "expo-router";
import { View } from "react-native";
import { LoginLink } from "./loginLink";

export function Header() {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        padding: 20,
        gap: 20,
      }}
    >
      <LoginLink></LoginLink>
      <Link href="/map">Mapa</Link>
    </View>
  );
}
