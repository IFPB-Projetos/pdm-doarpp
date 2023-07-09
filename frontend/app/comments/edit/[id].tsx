import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Text } from "react-native";
import { CommentEditScreen } from "../../../comment/commentEditScreen";
import { api } from "../../../common/api";
import { Comment } from "../../../types/comment";

export default function () {
  const { id } = useLocalSearchParams();
  const [comment, setComment] = useState<Comment>();

  async function getComment() {
    const res = await api.get(`/comments/${id}`);
    setComment(res.data);
  }

  useEffect(() => {
    getComment();
  }, []);

  if (!comment) return <Text>carregando</Text>;

  return <CommentEditScreen comment={comment}></CommentEditScreen>;
}
