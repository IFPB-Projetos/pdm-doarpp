import { Image, View } from "react-native";
import { Marker } from "react-native-maps";
import { User } from "../types/user";
import { getLatLng } from "../user/getLatLng";
import { Dispatch, SetStateAction } from "react";

type Props = {
  user: User;
  setUser: (user: User) => void;
};

export function UserMarker({ user, setUser }: Props) {
  if (!user.location) return null;

  function handlePress() {
    setUser(user);
  }

  return (
    <Marker coordinate={getLatLng(user.location)} onPress={handlePress}>
      <Image
        source={{
          uri: `https://picsum.photos/seed/${user.id}/40`,
          width: 40,
          height: 40,
        }}
        style={{ borderRadius: 1000 }}
      ></Image>
    </Marker>
  );
}
