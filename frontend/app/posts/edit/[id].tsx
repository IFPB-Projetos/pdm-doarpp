import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { api } from "../../../common/api";
import { LoadingScreen } from "../../../common/loadingScreen";
import { PostEditScreen } from "../../../post/postEditScreen";

export default function () {
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

  return <PostEditScreen post={post}></PostEditScreen>;
}
