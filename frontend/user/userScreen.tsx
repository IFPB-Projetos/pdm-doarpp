import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { api } from "../common/api";
import { getImageSource } from "../common/getImageSource";
import { LoadingScreen } from "../common/loadingScreen";
import { NavbarLayout } from "../common/navbarLayout";
import { Section } from "../common/section";
import { User } from "../types/user";
import { LocationHint } from "./locationHint";
import { useIsOwner } from "./useIsOwner";
import { UserPosts } from "./userPosts";
import { UserScreenButtons } from "./userScreenButtons";

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
  if (!user) return <LoadingScreen />;

  const { email, phone, posts, name, image, createdAt, description, location } =
    user;

  return (
    <NavbarLayout selected="user">
      <UserPosts
        id={id}
        posts={posts}
        top={
          <View style={{ gap: 10, padding: 10 }}>
            <View
              style={{ flexDirection: "row", gap: 10, alignItems: "center" }}
            >
              <Image
                style={{ borderRadius: 9999, backgroundColor: "#bbb" }}
                source={getImageSource(image, 100)}
              ></Image>
              <Text style={{ fontSize: 28, flexWrap: "wrap", flex: 1 }}>
                {name}
              </Text>
            </View>
            {isOwner && <UserScreenButtons />}
            <Section title="Sobre">
              {description && <Text>{description}</Text>}
              <Text style={{ fontSize: 14, marginTop: 8 }}>
                No Doarpp desde {new Date(createdAt).toLocaleDateString()}
              </Text>
            </Section>
            <Section title="Contato">
              {email && <Text>{email}</Text>}
              {phone && <Text>{phone}</Text>}
            </Section>
            <Section title="Localização">
              {location ? (
                <LocationHint location={location}></LocationHint>
              ) : (
                <Text>sem localização</Text>
              )}
            </Section>
            <Section title="Posts"></Section>
          </View>
        }
      ></UserPosts>
    </NavbarLayout>
  );
}
