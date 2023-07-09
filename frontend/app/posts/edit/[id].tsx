import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Text } from "react-native";
import { api } from "../../../common/api";
import PostEditScreen from "../create";

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

  if (!post) return <Text>carregando</Text>;

  return <PostEditScreen post={post}></PostEditScreen>;
}
