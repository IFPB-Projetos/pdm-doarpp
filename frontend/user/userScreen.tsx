import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { api } from "../api";
import { PostItem } from "../home/postItem";
import { User } from "../types/user";
import { LocationHint } from "./locationHint";
import { Section } from "./section";
import { useIsOwner } from "./useIsOwner";
import { UserEditLink } from "./userEditLink";

type Props = {
  id: string;
};

export function UserScreen({ id }: Props) {
  const [user, setUser] = useState<User>();
  const { isOwner } = useIsOwner(id);

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
    <View style={{ gap: 10, padding: 10 }}>
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
      {isOwner && <UserEditLink></UserEditLink>}
      <Section title="Sobre">
        <Text>{user.description}</Text>
        <Text style={{ opacity: 0.5 }}>
          No Doarpp desde {new Date(user.createdAt).toLocaleDateString()}
        </Text>
      </Section>
      <Section title="Contato">
        <Text>{user.email}</Text>
        <Text>{user.phone}</Text>
      </Section>
      <Section title="Localização">
        {user.location ? (
          <LocationHint location={user.location}></LocationHint>
        ) : (
          <Text>sem localização</Text>
        )}
      </Section>
      <Section title="Posts">
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
      </Section>
    </View>
  );
}
