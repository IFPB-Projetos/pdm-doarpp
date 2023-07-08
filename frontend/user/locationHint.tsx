import { Button, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Location } from "../types/location";
import { getLatLng } from "./getLatLng";

type Props = {
  location: Location;
};

export function LocationHint({ location }: Props) {
  const latLng = getLatLng(location);
  return (
    <View style={{ borderRadius: 10, overflow: "hidden" }}>
      <MapView
        scrollEnabled={false}
        zoomEnabled={false}
        style={{ height: 140 }}
        initialRegion={{ ...latLng, latitudeDelta: 1, longitudeDelta: 1 }}
      >
        <Marker coordinate={latLng}></Marker>
      </MapView>
      <Button title="abrir no mapa"></Button>
    </View>
  );
}
