import {
  LocationObject,
  getCurrentPositionAsync,
  requestForegroundPermissionsAsync,
} from "expo-location";
import { useEffect, useRef, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useAuth } from "../auth/authContext";
import { api } from "../common/api";

async function requestPermissionAndLocation() {
  const { granted } = await requestForegroundPermissionsAsync();

  if (granted) {
    const currentPosition = await getCurrentPositionAsync();
    return currentPosition;
  } else {
    return null;
  }
}

export function UserEditLocalization() {
  const user = useAuth().user;
  const [location, setLocation] = useState<LocationObject | null>(null);
  const mapRef = useRef<MapView>(null);
  const id = user?.id;

  useEffect(() => {
    const getLocation = async () => {
      const currentPosition = await requestPermissionAndLocation();
      setLocation(currentPosition);
    };
    getLocation();
  }, []);

  async function handlerPress() {
    if (!mapRef.current) return;
    const camera = await mapRef.current!.getCamera();
    const {
      center: { latitude, longitude },
    } = camera;
    await api.patch("/users/me/location", { latitude, longitude });
  }

  if (!location) {
    return <Text>Obtendo localização...</Text>;
  }

  return (
    <View style={styles.container}>
      {location && (
        <MapView
          ref={mapRef}
          style={styles.map}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
        >
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
          />
        </MapView>
      )}

      <Button title="atualizar cordenada" onPress={handlerPress}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
