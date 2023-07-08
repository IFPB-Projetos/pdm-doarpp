import { ReactElement, useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { api } from "../api";
import { PostItem } from "../home/postItem";

type Props = {
  id: string;
  top: ReactElement;
};

export function UserPosts({ id, top }: Props) {
  const [posts, setPosts] = useState<Post[]>();

  async function getPosts() {
    const res = await api.get(`/users/${id}/posts`);
    setPosts(res.data);
  }

  useEffect(() => {
    getPosts();
  }, []);

  // to-do replace this
  if (!posts) return <Text>carregando posts</Text>;

  return (
    <FlatList
      data={posts}
      ListHeaderComponent={top}
      renderItem={({ item }) => <PostItem post={item}></PostItem>}
      ListEmptyComponent={
        <Text style={{ padding: 10, fontSize: 14 }}>Sem posts ainda</Text>
      }
    ></FlatList>
  );
}
