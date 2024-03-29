import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { CommentInput } from "../comment/commentInput";
import { api } from "../common/api";
import { getImageSource } from "../common/getImageSource";
import { LoadingScreen } from "../common/loadingScreen";
import { NavbarLayout } from "../common/navbarLayout";
import { useInvalidate } from "../common/useCache";
import { PostComments } from "../home/postComments";
import { Post } from "../types/post";
import { useIsOwner } from "../user/useIsOwner";
import PostOptions from "./postOptions";
import { UserLink } from "./userLink";

export function PostScreen() {
  const { id } = useLocalSearchParams();
  const [post, setPost] = useState<Post>();
  const { isOwner } = useIsOwner(post?.user.id);
  const { invalidation } = useInvalidate("post");

  async function getPost() {
    const res = await api.get(`/posts/${id}`);
    setPost(res.data);
  }

  useEffect(() => {
    getPost();
  }, [invalidation]);

  return (
    <NavbarLayout selected="home">
      {post ? (
        <PostComments
          comments={post.comments}
          top={
            <View>
              <Image
                source={getImageSource(post.image, 300)}
                style={{ height: 300, width: undefined }}
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
