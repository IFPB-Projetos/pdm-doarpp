import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import { api } from "../api";

type Props = {
  postId: string;
  refresh: () => any;
};

export function CommentInput({ postId, refresh }: Props) {
  const [content, setContent] = useState("");

  async function handlePress() {
    api.post("/comments", { content, postId });
    setContent("");
    refresh();
  }

  return (
    <View>
      <TextInput
        multiline
        value={content}
        onChangeText={(text) => setContent(text)}
        style={styles.input}
        placeholder="Escrever comentário"
      ></TextInput>
      {content && <Button title="Enviar" onPress={handlePress}></Button>}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: "gray",
    paddingVertical: 10,
    textAlignVertical: "top",
  },
});
