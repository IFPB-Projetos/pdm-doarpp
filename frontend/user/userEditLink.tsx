import { Link } from "expo-router";
import { Text, View } from "react-native";

export function UserEditLink() {
  return (
    <Link href="/users/me/edit" style={{ alignSelf: "center" }}>
      <View>
        <Text
          style={{
            padding: 10,
            fontSize: 16,
            borderWidth: 1,
            borderRadius: 10,
            borderColor: "gray",
          }}
        >
          Editar perfil
        </Text>
      </View>
    </Link>
  );
}
