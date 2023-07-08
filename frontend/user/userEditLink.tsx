import { Link } from "expo-router";
import { Text, View } from "react-native";

export function UserEditLink() {
  return (
    <Link href="/users/me/edit" style={{ alignSelf: "center" }}>
      <View>
        <Text
          style={{
            fontSize: 16,
            borderColor: "gray",
            borderRadius: 10,
            borderWidth: 1,
            padding: 10,
          }}
        >
          Editar perfil
        </Text>
      </View>
    </Link>
  );
}
