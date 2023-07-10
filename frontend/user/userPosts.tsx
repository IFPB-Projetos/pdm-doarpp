import { ReactElement } from "react";
import { FlatList, Text } from "react-native";
import { PostItem } from "../home/postItem";

type Props = {
  id: string;
  posts: Post[];
  top: ReactElement;
};

export function UserPosts({ top, posts }: Props) {
  return (
    <FlatList
      data={posts}
      ListHeaderComponent={top}
      renderItem={({ item }) => <PostItem key={item.id} post={item}></PostItem>}
      ListEmptyComponent={
        <Text style={{ padding: 10, fontSize: 14 }}>Sem posts ainda</Text>
      }
    ></FlatList>
  );
}
