import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { api } from "../api";
import { PostItem } from "../home/postItem";

export function NgoScreen() {
  const { id } = useLocalSearchParams();
  const [ngo, setNgo] = useState<Ngo>();

  async function getNgo() {
    const res = await api.get(`/ngos/${id}`);
    setNgo(res.data);
  }

  useEffect(() => {
    getNgo();
  }, []);

  // todo replace this
  if (!ngo) {
    return <Text>carregando</Text>;
  }

  return (
    <View style={{ gap: 20 }}>
      <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
        <Image
          source={{
            uri: `https://picsum.photos/seed/${ngo.id}/100`,
            width: 100,
            height: 100,
          }}
          style={{ borderRadius: 9999 }}
        ></Image>
        <Text style={{ fontSize: 28, flexWrap: "wrap", flex: 1 }}>
          {ngo.name}
        </Text>
      </View>
      <Text style={{ fontSize: 16 }}>
        No Doarpp desde {new Date(ngo.createdAt).toLocaleDateString()}
      </Text>
      <View>
        <Text>Sobre</Text>
        <Text>{ngo.description}</Text>
      </View>
      <View>
        <Text>Contato</Text>
        <Text>{ngo.email}</Text>
        <Text>{ngo.phone}</Text>
      </View>

      <View>
        <Text>Posts</Text>
        <FlatList
          data={ngo.posts}
          renderItem={({ item }) => (
            <PostItem post={item} key={item.id}></PostItem>
          )}
        ></FlatList>
      </View>
    </View>
  );
}
