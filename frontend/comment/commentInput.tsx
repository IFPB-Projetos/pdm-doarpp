import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import { api } from "../common/api";
import { useInvalidate } from "../common/useCache";

type Props = {
  postId: string;
};

export function CommentInput({ postId }: Props) {
  const [content, setContent] = useState("");
  const { clear } = useInvalidate("post");

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
      {!!content && <Button title="Enviar" onPress={handlePress}></Button>}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: "gray",
    paddingVertical: 10,
    borderRadius: 10,
  },
});
