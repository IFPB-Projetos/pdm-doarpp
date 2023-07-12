import {
  LocationAccuracy,
  LocationObject,
  getCurrentPositionAsync,
  requestForegroundPermissionsAsync,
  watchPositionAsync,
} from "expo-location";
import { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useAuth } from "../auth/authContext";

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

  useEffect(() => {
    const getLocation = async () => {
      const currentPosition = await requestPermissionAndLocation();
      setLocation(currentPosition);
    };
    getLocation();
  }, []);

  useEffect(() => {
    watchPositionAsync(
      {
        accuracy: LocationAccuracy.Highest,
        timeInterval: 1000,
        distanceInterval: 1,
      },
      (response) => {
        console.log("Nova localização ", response);
        setLocation(response);
        mapRef.current?.animateCamera({
          pitch: 70,
          center: response.coords,
        });
      }
    );
  }, []);

  if (!location) {
    return <Text>Obtendo localização...</Text>;
  }

  const id = user?.id;

  const name = user?.name;

  return (
    <View>
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

      {/* await api.patch("/users/me", latitede ,longitude); */}

      {/* <Button title="ola" onPress={handleSubmit(submit)}></Button> */}
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});
