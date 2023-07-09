import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { CommentInput } from "../comment/commentInput";
import { api } from "../common/api";
import { LoadingScreen } from "../common/loadingScreen";
import { NavbarLayout } from "../common/navbarLayout";
import { PostComments } from "../home/postComments";
import { useIsOwner } from "../user/useIsOwner";
import PostOptions from "./postOptions";
import { UserLink } from "./userLink";

export function PostScreen() {
  const { id } = useLocalSearchParams();
  const [post, setPost] = useState<Post>();
  const { isOwner } = useIsOwner(post?.user.id);

  async function getPost() {
    const res = await api.get(`/posts/${id}`);
    setPost(res.data);
  }

  useEffect(() => {
    getPost();
  }, []);

  return (
    <NavbarLayout selected="home">
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
                <View style={{ flexDirection: "row" }}>
                  <UserLink user={post.user}></UserLink>
                  {isOwner && <PostOptions id={post.id}></PostOptions>}
                </View>
                <Text>{post.content}</Text>
                <View style={{ padding: 10 }}></View>
                <CommentInput postId={post.id}></CommentInput>
              </View>
            </View>
          }
        ></PostComments>
      ) : (
        <LoadingScreen />
      )}
    </NavbarLayout>
  );
}
