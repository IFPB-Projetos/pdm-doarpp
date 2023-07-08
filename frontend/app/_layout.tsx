import { Slot } from "expo-router";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthContextProvider } from "../auth/authContext";

export default function Root() {
  return (
    <AuthContextProvider>
      <SafeAreaView>
        <Slot />
      </SafeAreaView>
    </AuthContextProvider>
  );
}
