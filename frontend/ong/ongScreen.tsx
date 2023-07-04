import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { api } from "../api";
import { PostItem } from "../home/postItem";

export function OngScreen() {
  const { id } = useLocalSearchParams();
  const [ong, setOng] = useState<Ong>();

  async function getOng() {
    const res = await api.get(`/ongs/${id}`);
    setOng(res.data);
  }

  useEffect(() => {
    getOng();
  }, []);

  // todo replace this
  if (!ong) {
    return <Text>carregando</Text>;
  }

  return (
    <View style={{ gap: 20 }}>
      <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
        <Image
          source={{
            uri: `https://picsum.photos/seed/${ong.id}/100`,
            width: 100,
            height: 100,
          }}
          style={{ borderRadius: 9999 }}
        ></Image>
        <Text style={{ fontSize: 28, flexWrap: "wrap", flex: 1 }}>
          {ong.name}
        </Text>
      </View>
      <Text style={{ fontSize: 16 }}>
        desde {new Date(ong.createdAt).toLocaleDateString()}
      </Text>
      <View>
        <Text>Sobre</Text>
        <Text>{ong.description}</Text>
      </View>
      <View>
        <Text>Contato</Text>
        <Text>{ong.email}</Text>
        <Text>{ong.phone}</Text>
      </View>

      <View>
        <Text>Posts</Text>
        <FlatList
          data={ong.posts}
          renderItem={({ item }) => (
            <PostItem post={item} key={item.id}></PostItem>
          )}
        ></FlatList>
      </View>
    </View>
  );
}
