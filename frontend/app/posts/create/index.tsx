import { useRouter } from "expo-router";
import { useAuth } from "../../../auth/authContext";
import { LoginScreen } from "../../../auth/loginScreen";
import { api } from "../../../common/api";
import { NavbarLayout } from "../../../common/navbarLayout";
import { PostEditScreen } from "../../../post/postEditScreen";

export default function () {
  const router = useRouter();
  const { user } = useAuth();

  if (!user) {
    return (
      <NavbarLayout selected="post">
        <LoginScreen></LoginScreen>
      </NavbarLayout>
    );
  }

  async function submit(data: any) {
    const { title, content, imageUpload } = data;
    const newPost = { title, content, imageUpload };
    const res = await api.post("/posts", newPost);
    const { id } = res.data;
    router.replace(`/posts/${id}`);
  }

  return <PostEditScreen submit={submit}></PostEditScreen>;
}
