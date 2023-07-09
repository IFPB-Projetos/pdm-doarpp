import { ActivityIndicator, View } from "react-native";

export function LoadingScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ActivityIndicator color="green" size={60}></ActivityIndicator>
    </View>
  );
}
