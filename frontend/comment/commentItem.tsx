import { Text, View } from "react-native";
import { Comment } from "../types/comment";
import { UserLink } from "./userLink";

type Props = {
  comment: Comment;
};

export function CommentItem({ comment }: Props) {
  return (
    <View style={{ padding: 10 }}>
      <UserLink size={30} user={comment.user}></UserLink>
      <Text>{comment.content}</Text>
    </View>
  );
}
