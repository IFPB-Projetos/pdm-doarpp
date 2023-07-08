import { Link } from "expo-router";
import { View } from "react-native";
import { MeLink } from "./meLink";

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
      <MeLink></MeLink>
    </View>
  );
}
