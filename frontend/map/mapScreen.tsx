import { useEffect, useState } from "react";
import { View } from "react-native";
import MapView from "react-native-maps";
import { api } from "../api";
import { Navbar } from "../common/navbar";
import { User } from "../types/user";
import { MapUserDetail } from "./mapUserDetail";
import { UserMarker } from "./userMarker";

export function MapScreen() {
  const [users, setUsers] = useState<User[]>([]);
  const [user, setUser] = useState<User>();

  async function getUsers() {
    const res = await api.get("/users");
    setUsers(res.data);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <MapView
        showsUserLocation
        style={{ flex: 1 }}
        followsUserLocation
        rotateEnabled={false}
        initialRegion={{
          longitude: -38.557,
          latitude: -6.892,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
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
      <Navbar></Navbar>
    </View>
  );
}
