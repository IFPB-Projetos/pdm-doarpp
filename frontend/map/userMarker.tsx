import { Image } from "react-native";
import { Marker } from "react-native-maps";
import { getImageSource } from "../common/getImageSource";
import { User } from "../types/user";
import { getLatLng } from "../user/getLatLng";

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
        style={{ borderRadius: 1000 }}
        source={getImageSource(user.id, 40)}
      ></Image>
    </Marker>
  );
}
