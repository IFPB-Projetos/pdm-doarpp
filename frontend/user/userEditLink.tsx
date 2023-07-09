import { Link } from "expo-router";
import { Text, View } from "react-native";
import { userStyles } from "./userStyles";

export function UserEditLink() {
  return (
    <Link href="/users/me/edit" style={{ alignSelf: "center" }}>
      <View>
        <Text style={userStyles.topButton}>Editar perfil</Text>
      </View>
    </Link>
  );
}
