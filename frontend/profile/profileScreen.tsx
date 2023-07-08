import { Button, Text, View } from "react-native";
import { useAuth } from "../auth/authContext";

export function ProfileScreen() {
  const { logout } = useAuth();

  return (
    <View>
      <Text>Profile</Text>
      <Button title="logout" onPress={logout}></Button>
    </View>
  );
}
