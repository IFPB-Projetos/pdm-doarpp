import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { api } from "../../../common/api";
import { LoadingScreen } from "../../../common/loadingScreen";
import { PostEditScreen } from "../../../post/postEditScreen";

export default function () {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const [post, setPost] = useState<Post>();

  async function getPost() {
    const res = await api.get(`/posts/${id}`);
    setPost(res.data);
  }

  useEffect(() => {
    getPost();
  }, []);

  if (!post) return <LoadingScreen />;

  async function submit(data: any) {
    const { title, content } = data;
    const newPost = { title, content };
    const res = await api.post("/posts", newPost);
    const { id } = res.data;
    router.replace(`/posts/${id}`);
  }

  return (
    <PostEditScreen
      submit={submit}
      defaultValues={post}
      defaultImage={post.image}
    ></PostEditScreen>
  );
}
