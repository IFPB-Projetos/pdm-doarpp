import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Region } from "react-native-maps";
import { api } from "../api";
import { useAuth } from "../auth/authContext";
import { User } from "../types/user";
import { getLatLng } from "../user/getLatLng";
import { MapUserDetail } from "./mapUserDetail";
import { UserMarker } from "./userMarker";

export function MapScreen() {
  const { user: currentUser } = useAuth();
  const [users, setUsers] = useState<User[]>([]);
  const [user, setUser] = useState<User>();

  function getInitialRegion(): Region | undefined {
    if (!currentUser) return;

    console.log("here");

    return {
      ...getLatLng(currentUser.location),
      latitudeDelta: 1,
      longitudeDelta: 1,
    };
  }

  async function getUsers() {
    const res = await api.get("/users");
    setUsers(res.data);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <View style={styles.screen}>
      <MapView
        showsUserLocation
        style={styles.map}
        followsUserLocation
        rotateEnabled={false}
        initialRegion={getInitialRegion()}
      >
        {users.map((user) => {
          if (user.location)
            return (
              <UserMarker
                key={user.id}
                user={user}
                setUser={setUser}
              ></UserMarker>
            );
        })}
      </MapView>
      {user && <MapUserDetail user={user}></MapUserDetail>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  screen: {
    flex: 1,
  },
});
