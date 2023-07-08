import { Redirect } from "expo-router";
import { useAuth } from "../../../auth/authContext";
import { UserScreen } from "../../../user/userScreen";

export default function () {
  const { user } = useAuth();

  if (!user) {
    return <Redirect href="/login" />;
  }

  return <UserScreen id={user?.id}></UserScreen>;
}
