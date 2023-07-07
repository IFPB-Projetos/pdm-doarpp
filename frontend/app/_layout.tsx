import { Slot } from "expo-router";
import { AuthContextProvider } from "../auth/authContext";

export default function Root() {
  return (
    <AuthContextProvider>
      <Slot />
    </AuthContextProvider>
  );
}
