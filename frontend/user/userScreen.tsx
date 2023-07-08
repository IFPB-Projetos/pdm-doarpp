import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { api } from "../api";
import { User } from "../types/user";
import { LocationHint } from "./locationHint";
import { Section } from "./section";
import { useIsOwner } from "./useIsOwner";
import { UserEditLink } from "./userEditLink";
import { UserPosts } from "./userPosts";

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

  useEffect(() => {
    getUser();
  }, []);

  // todo replace this
  if (!user) {
    return <Text>carregando</Text>;
  }

  return (
    <UserPosts
      id={user.id}
      top={
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
            <Text style={{ fontSize: 14, marginTop: 8 }}>
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
          <Section title="Posts"></Section>
        </View>
      }
    ></UserPosts>
  );
}