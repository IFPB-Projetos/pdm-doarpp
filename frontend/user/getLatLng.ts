import { LatLng } from "react-native-maps";
import { Location } from "../types/location";

export function getLatLng(location: Location): LatLng {
  return {
    latitude: location.coordinates[1],
    longitude: location.coordinates[0],
  };
}
