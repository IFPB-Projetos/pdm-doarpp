import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { CommentEditScreen } from "../../../comment/commentEditScreen";
import { api } from "../../../common/api";
import { LoadingScreen } from "../../../common/loadingScreen";
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

  if (!comment) return <LoadingScreen />;

  return <CommentEditScreen comment={comment}></CommentEditScreen>;
}
