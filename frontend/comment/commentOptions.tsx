import { FontAwesome5 } from "@expo/vector-icons";
import { TouchableHighlight } from "react-native";

export default function CommentOptions() {
  return (
    <TouchableHighlight style={{ marginLeft: "auto" }}>
      <FontAwesome5 name="ellipsis-h" size={24} color="gray" />
    </TouchableHighlight>
  );
}
