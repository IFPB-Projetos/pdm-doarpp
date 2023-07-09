import { Redirect } from "expo-router";
import { useAuth } from "../../../auth/authContext";
import { PostEditScreen } from "../../../post/postEditScreen";

export default function () {
  const { user } = useAuth();
  if (!user) return <Redirect href={"/login"}></Redirect>;
  return <PostEditScreen></PostEditScreen>;
}
