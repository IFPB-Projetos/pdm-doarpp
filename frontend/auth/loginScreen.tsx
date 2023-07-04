import { useAuthRequest } from "expo-auth-session/build/providers/Google";
import { useEffect } from "react";
import { Button, Text, View } from "react-native";

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
      if (accessToken) {
        fetchUser(accessToken);
      }
    }
  }, [response]);

  async function fetchUser(accessToken: string) {
    const res = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    const data = await res.json();
    // todo save user in context
  }

  function handlePress() {
    prompt();
  }

  return (
    <View>
      <Text>Faça login</Text>
      <Button onPress={handlePress} title="login com o google"></Button>
    </View>
  );
}
