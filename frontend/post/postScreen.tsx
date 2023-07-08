import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { api } from "../api";
import { CommentInput } from "../comment/commentInput";
import { NavbarLayout } from "../common/navbarLayout";
import { PostComments } from "../home/postComments";
import { UserLink } from "./userLink";

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

  return (
    <NavbarLayout>
      {post ? (
        <PostComments
          id={post.id}
          top={
            <View>
              <Image
                style={{ width: "100%", aspectRatio: 1 }}
                source={{
                  uri: `https://picsum.photos/seed/${id}/1080/1080`,
                }}
              />
              <View style={{ gap: 10, padding: 10 }}>
                <Text style={{ fontWeight: "600", fontSize: 30 }}>
                  {post.title}
                </Text>
                <UserLink user={post.user}></UserLink>
                <Text>{post.content}</Text>
                <View style={{ padding: 10 }}></View>
                <CommentInput postId={post.id}></CommentInput>
              </View>
            </View>
          }
        ></PostComments>
      ) : (
        <Text>carregando</Text>
      )}
    </NavbarLayout>
  );
}
