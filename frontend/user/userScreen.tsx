import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { api } from "../api";
import { PostItem } from "../home/postItem";

type Props = {
  id: string;
};

export function UserScreen({ id }: Props) {
  const [user, setUser] = useState<User>();

  async function getUser() {
    const res = await api.get(`/users/${id}`);
    setUser(res.data);
  }

  useEffect(() => {
    getUser();
  }, []);

  // todo replace this
  if (!user) {
    return <Text>carregando</Text>;
  }

  return (
    <View style={{ gap: 20 }}>
      <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
        <Image
          source={{
            uri: `https://picsum.photos/seed/${user.id}/100`,
            width: 100,
            height: 100,
          }}
          style={{ borderRadius: 9999 }}
        ></Image>
        <Text style={{ fontSize: 28, flexWrap: "wrap", flex: 1 }}>
          {user.name}
        </Text>
      </View>
      <View>
        <Text>Sobre</Text>
        <Text>{user.description}</Text>
      </View>
      <Text>
        No Doarpp desde {new Date(user.createdAt).toLocaleDateString()}
      </Text>
      <View>
        <Text>Contato</Text>
        <Text>{user.email}</Text>
        <Text>{user.phone}</Text>
      </View>

      <View>
        <Text>Posts</Text>
        <FlatList
          data={user.posts}
          renderItem={({ item }) => (
            <PostItem post={item} key={item.id}></PostItem>
          )}
        ></FlatList>
      </View>
    </View>
  );
}
