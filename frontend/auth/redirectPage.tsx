import { Redirect } from "expo-router";

export default function AuthRedirect() {
  return <Redirect href="/expo-auth-session" />;
}
