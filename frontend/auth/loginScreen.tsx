import { Redirect } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavbarLayout } from "../common/navbarLayout";
import { useAuth } from "./authContext";
import { useGoogleAuthRequest } from "./useGoogleAuthRequest";

export function LoginScreen() {
  const { login, user } = useAuth();
  const [_, response, prompt] = useGoogleAuthRequest();

  function handlePress() {
    // for development uncomment
    // login("mock");
    // return;

    prompt().then((response) => {
      // to-do handle other response types
      if (response?.type === "success") {
        const accessToken = response.authentication?.accessToken;
        if (accessToken) login(accessToken);
      }
    });
  }

  if (user) {
    return <Redirect href="/users/me"></Redirect>;
  }

  return (
    <NavbarLayout>
      <View style={styles.container}>
        <Text style={{ fontSize: 20, textAlign: "center" }}>
          Faça login para ter funcionalidades adicionais
        </Text>
        <Button onPress={handlePress} title="Fazer login com o Google"></Button>
      </View>
    </NavbarLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
