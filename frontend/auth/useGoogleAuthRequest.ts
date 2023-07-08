import { useAuthRequest } from "expo-auth-session/build/providers/Google";

export function useGoogleAuthRequest() {
  return useAuthRequest({
    clientId:
      "1062840594353-031df80t94glvis2p95rqa57ra738a07.apps.googleusercontent.com",
    androidClientId:
      "1062840594353-1nh103v4vrbbga6uleghci6rpb4deutr.apps.googleusercontent.com",
    iosClientId:
      "1062840594353-0i42u1okm0s7maoi4fe737vo1ekeqh0a.apps.googleusercontent.com",
  });
}
