import { Text, View } from "react-native";
import { useAuth } from "../auth/authContext";
import { Comment } from "../types/comment";
import CommentOptions from "./commentOptions";
import { UserLink } from "./userLink";

type Props = {
  comment: Comment;
};

export function CommentItem({ comment }: Props) {
  const { user } = useAuth();

  return (
    <View style={{ padding: 10 }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <UserLink user={comment.user}></UserLink>
        {comment.userId === user?.id && (
          <CommentOptions id={comment.id}></CommentOptions>
        )}
      </View>
      <Text>{comment.content}</Text>
    </View>
  );
}
