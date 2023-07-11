import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import "../common/api";
import { api } from "../common/api";
import { NavbarLayout } from "../common/navbarLayout";
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
    <NavbarLayout selected="home">
      <FlatList
        data={posts}
        contentContainerStyle={{ gap: 20 }}
        renderItem={({ item }) => (
          <PostItem post={item} key={item.id}></PostItem>
        )}
        ListEmptyComponent={
          <View
            style={{
              flex: 1,
              padding: 20,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 16 }}>
              Nenhuma postagem. Você pode tentar mudar os filtros
            </Text>
          </View>
        }
      ></FlatList>
    </NavbarLayout>
  );
}
