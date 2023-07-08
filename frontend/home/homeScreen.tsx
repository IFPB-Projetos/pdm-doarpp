import { useEffect, useState } from "react";
import { FlatList, SafeAreaView } from "react-native";
import "../api";
import { api } from "../api";
import { Header } from "./header";
import { PostItem } from "./postItem";

export function HomeScreen() {
  const [posts, setPosts] = useState<Post[]>();

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    const res = await api.get("/posts");
    setPosts(res.data);
  }

  return (
    <SafeAreaView style={{ gap: 10 }}>
      <Header></Header>
      <FlatList
        data={posts}
        contentContainerStyle={{ gap: 20 }}
        renderItem={({ item }) => (
          <PostItem post={item} key={item.id}></PostItem>
        )}
      ></FlatList>
    </SafeAreaView>
  );
}
