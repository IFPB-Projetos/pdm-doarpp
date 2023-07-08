import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import { api } from "../api";
import { useCache } from "./useCache";

type Props = {
  postId: string;
};

export function CommentInput({ postId }: Props) {
  const [content, setContent] = useState("");
  const { clear } = useCache("comments");

  async function handlePress() {
    await api.post("/comments", { content, postId });
    setContent("");
    clear();
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
    borderRadius: 10,
  },
});
