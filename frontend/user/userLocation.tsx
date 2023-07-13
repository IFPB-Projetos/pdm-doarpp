import { useRouter } from "expo-router";
import { useRef } from "react";
import { Button, StyleSheet, View } from "react-native";
import MapView from "react-native-maps";
import { useAuth } from "../auth/authContext";
import { api } from "../common/api";

export function UserEditLocalization() {
  const mapRef = useRef<MapView>(null);
  const router = useRouter();
  const { user } = useAuth();

  async function handlerPress() {
    if (!mapRef.current) return;
    const camera = await mapRef.current!.getCamera();
    const {
      center: { latitude, longitude },
    } = camera;
    await api.patch("/users/me/location", { latitude, longitude });
    router.replace("/users/me");
  }

  return (
    <View style={styles.container}>
      {location && (
        <MapView
          rotateEnabled={false}
          ref={mapRef}
          style={styles.map}
        ></MapView>
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
