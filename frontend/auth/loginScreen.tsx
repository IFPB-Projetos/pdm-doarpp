import { Redirect } from "expo-router";
import { useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useAuth } from "./authContext";
import { useGoogleAuthRequest } from "./useGoogleAuthRequest";

export function LoginScreen() {
  const { login, user } = useAuth();
  const [_, response, prompt] = useGoogleAuthRequest();

  function handlePress() {
    prompt().then((response) => {
      if (response?.type === "success") {
        console.log("response type", response?.type);
        const accessToken = response.authentication?.accessToken;
        if (accessToken) login(accessToken);
      }
    });
  }

  if (user) {
    return <Redirect href="/profile"></Redirect>;
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, textAlign: "center" }}>
        Faça login para ter funcionalidades adicionais
      </Text>
      <Button onPress={handlePress} title="Fazer login com o Google"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
