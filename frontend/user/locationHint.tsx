import { Link } from "expo-router";
import { Text, View } from "react-native";
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
      <View style={{ padding: 10, backgroundColor: "#bbb" }}>
        <Link
          href={{ pathname: "/map", params: latLng }}
          style={{ width: "100%" }}
        >
          <Text>Abrir no mapa</Text>
        </Link>
      </View>
    </View>
  );
}
