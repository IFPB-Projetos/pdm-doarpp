import { ReactElement } from "react";
import { FlatList } from "react-native";
import { CommentItem } from "../comment/commentItem";
import { Comment } from "../types/comment";

type Props = {
  top: ReactElement;
  comments: Comment[];
};

export function PostComments({ top, comments }: Props) {
  return (
    <FlatList
      data={comments}
      ListHeaderComponent={top}
      renderItem={({ item }) => <CommentItem comment={item}></CommentItem>}
    ></FlatList>
  );
}
