import { useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useAuth } from "./authContext";
import { useGoogleAuthRequest } from "./useGoogleAuthRequest";

export function LoginScreen() {
  const { login } = useAuth();
  const [_, response, prompt] = useGoogleAuthRequest();

  console.log("here", response?.type);

  useEffect(() => {
    // to-do handle error cases
    if (response?.type === "success") {
      const accessToken = response.authentication?.accessToken;
      if (accessToken) login(accessToken);
    }
  }, [response]);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, textAlign: "center" }}>
        Faça login para ter funcionalidades adicionais
      </Text>
      <Button
        onPress={() => prompt()}
        title="Fazer login com o Google"
      ></Button>
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
