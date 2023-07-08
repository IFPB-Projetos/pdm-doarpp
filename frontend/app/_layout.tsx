import { Slot } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthContextProvider } from "../auth/authContext";

export default function Root() {
  return (
    <AuthContextProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Slot />
      </SafeAreaView>
    </AuthContextProvider>
  );
}
