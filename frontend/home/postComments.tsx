import { ReactElement, useEffect, useState } from "react";
import { FlatList, Text } from "react-native";
import { api } from "../api";
import { CommentItem } from "../comment/commentItem";
import { useCache } from "../comment/useCache";
import { Comment } from "../types/comment";

type Props = {
  id: string;
  top: ReactElement;
};

export function PostComments({ id, top }: Props) {
  const [comments, setComments] = useState<Comment[]>();
  const { cacheState } = useCache("comments");

  async function getComments() {
    const res = await api.get(`/posts/${id}/comments`);
    setComments(res.data);
  }

  useEffect(() => {
    getComments();
  }, [cacheState]);

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
