import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { api } from "../api";
import { NgoLink } from "./ngoLink";

export function PostScreen() {
  const { id } = useLocalSearchParams();
  const [post, setPost] = useState<Post>();

  async function getPost() {
    const res = await api.get(`/posts/${id}`);
    setPost(res.data);
  }

  useEffect(() => {
    getPost();
  }, []);

  // todo replace this
  if (!post) {
    return <Text>carregando</Text>;
  }

  return (
    <View>
      <Image
        style={{ width: "100%", aspectRatio: 1 }}
        source={{
          uri: `https://picsum.photos/seed/${id}/1080/1080`,
        }}
      />
      <Text style={{ fontWeight: "600", fontSize: 30 }}>{post.title}</Text>
      <NgoLink ngo={post.ngo}></NgoLink>
      <Text>{post.content}</Text>
    </View>
  );
}