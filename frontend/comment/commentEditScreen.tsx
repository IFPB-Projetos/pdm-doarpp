import { useRouter } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { Button, Text, TextInput, View } from "react-native";
import { api } from "../common/api";
import { ErrorMessage } from "../common/errorMessage";
import { styles } from "../common/formStyles";
import { Comment } from "../types/comment";

type Props = {
  comment: Comment;
};

export function CommentEditScreen({ comment }: Props) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: comment });

  const router = useRouter();

  async function submit(data: any) {
    const { id } = comment;
    const { title, content } = data;
    const newComment = { title, content };
    await api.patch(`/comments/${id}`, newComment);
    router.replace(`/posts/${comment.postId}`);
  }

  return (
    <View style={{ gap: 10, padding: 10 }}>
      <Text style={{ fontSize: 16 }}>Editar comentáirio</Text>
      <View>
        <Text style={styles.label}>Conteúdo</Text>
        <Controller
          name="content"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              multiline
              value={value}
              onBlur={onBlur}
              maxLength={2000}
              numberOfLines={8}
              style={styles.input}
              onChangeText={(value) => onChange(value)}
            />
          )}
        />
        {errors.content && <ErrorMessage></ErrorMessage>}
      </View>
      <Button title="Salvar" onPress={handleSubmit(submit)} />
    </View>
  );
}
