import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { api } from "../api";
import { PostItem } from "../home/postItem";
import { User } from "../types/user";
import { LocationHint } from "./locationHint";

type Props = {
  id: string;
};

export function UserScreen({ id }: Props) {
  const [user, setUser] = useState<User>();

  async function getUser() {
    const res = await api.get(`/users/${id}`);
    setUser(res.data);
  }
  console.log(user);

  useEffect(() => {
    getUser();
  }, []);

  // todo replace this
  if (!user) {
    return <Text>carregando</Text>;
  }

  return (
    <View style={{ gap: 20, padding: 10 }}>
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
      <View>
        <Text>Contato</Text>
        <Text>{user.email}</Text>
        <Text>{user.phone}</Text>
      </View>
      {user.location ? (
        <View>
          <Text>Localização</Text>
          <LocationHint location={user.location}></LocationHint>
        </View>
      ) : (
        <Text>sem localização</Text>
      )}
      <Text>
        No Doarpp desde {new Date(user.createdAt).toLocaleDateString()}
      </Text>

      <View>
        <Text>Posts</Text>
        {user.posts.length ? (
          <FlatList
            data={user.posts}
            renderItem={({ item }) => (
              <PostItem post={item} key={item.id}></PostItem>
            )}
          ></FlatList>
        ) : (
          <Text>Sem posts por enquanto</Text>
        )}
      </View>
    </View>
  );
}
