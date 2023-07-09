import { ReactElement, useEffect, useState } from "react";
import { FlatList } from "react-native";
import { CommentItem } from "../comment/commentItem";
import { api } from "../common/api";
import { useCache } from "../common/useCache";
import { Comment } from "../types/comment";
import { LoadingScreen } from "../common/loadingScreen";

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

  if (!comments) return <LoadingScreen />;

  return (
    <FlatList
      data={comments}
      ListHeaderComponent={top}
      renderItem={({ item }) => <CommentItem comment={item}></CommentItem>}
    ></FlatList>
  );
}
