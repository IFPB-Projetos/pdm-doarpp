import { ReactElement, useEffect, useState } from "react";
import { FlatList, Text } from "react-native";
import { api } from "../api";
import { CommentItem } from "../comment/commentItem";
import { Comment } from "../types/comment";

type Props = {
  id: string;
  top: ReactElement;
};

export function PostComments({ id, top }: Props) {
  const [comments, setComments] = useState<Comment[]>();

  async function getComments() {
    const res = await api.get(`/posts/${id}/comments`);
    setComments(res.data);
  }

  useEffect(() => {
    getComments();
  });
  // to-do replace this
  if (!comments) return <Text>loading</Text>;
  return (
    <FlatList
      data={comments}
      ListHeaderComponent={top}
      renderItem={({ item }) => <CommentItem comment={item}></CommentItem>}
    ></FlatList>
  );
}
