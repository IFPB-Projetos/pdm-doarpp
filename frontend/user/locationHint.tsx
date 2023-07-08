import { Button, View } from "react-native";
import MapView from "react-native-maps";

export function LocationHint() {
  return (
    <View style={{ borderRadius: 10, overflow: "hidden" }}>
      <MapView
        scrollEnabled={false}
        zoomEnabled={false}
        style={{ height: 140 }}
      ></MapView>
      <Button title="abrir no mapa"></Button>
    </View>
  );
}
