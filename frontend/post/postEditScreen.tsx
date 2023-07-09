import { useRouter } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { api } from "../common/api";

type Props = {
  post?: Post;
};

function ErrorMessage() {
  return <Text style={{ color: "red" }}>Por favor, preencha esse campo</Text>;
}

export function PostEditScreen({ post }: Props) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: post || {
      title: "",
      content: "",
    },
  });

  const router = useRouter();

  async function submit(newPost: any) {
    if (post) {
      const { id } = post;
      await api.put(`/posts/${id}`, newPost);
      router.replace(`/posts/${id}`);
    } else {
      const res = await api.post("/posts", newPost);
      const { id } = res.data;
      router.replace(`/posts/${id}`);
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>Título</Text>
        <Controller
          name="title"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
        />
        {errors.title && <ErrorMessage></ErrorMessage>}
      </View>
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
              numberOfLines={8}
              style={styles.input}
              onChangeText={(value) => onChange(value)}
            />
          )}
        />
        {errors.content && <ErrorMessage></ErrorMessage>}
      </View>
      <Button title="Button" onPress={handleSubmit(submit)} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    padding: 10,
    textAlignVertical: "top",
    paddingVertical: 10,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 18,
  },
  label: {
    fontSize: 16,
    textAlign: "left",
  },
  container: {
    gap: 20,
    padding: 10,
  },
});
