import { useAuthRequest } from "expo-auth-session/build/providers/Google";
import { useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { fetchGoogleUser } from "./fetchGoogleUser";

export function LoginScreen() {
  const [_, response, prompt] = useAuthRequest({
    clientId:
      "1062840594353-031df80t94glvis2p95rqa57ra738a07.apps.googleusercontent.com",
    androidClientId:
      "1062840594353-1nh103v4vrbbga6uleghci6rpb4deutr.apps.googleusercontent.com",
    iosClientId:
      "1062840594353-0i42u1okm0s7maoi4fe737vo1ekeqh0a.apps.googleusercontent.com",
  });

  useEffect(() => {
    if (response?.type === "success") {
      const accessToken = response.authentication?.accessToken;
      console.log("here", accessToken);
      if (accessToken) {
        fetchGoogleUser(accessToken);
      }
    }
  }, [response]);

  function handlePress() {
    prompt();
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
