import { useRouter } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { Button, TextInput, View } from "react-native";
import { api } from "../common/api";
import { ErrorMessage } from "../common/errorMessage";
import { styles } from "../common/formStyles";
import { Section } from "../common/section";
import ImageInput from "../upload/imageInput";

type Props = {
  post?: Post;
};

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

  async function submit(data: any) {
    const { title, content } = data;
    const newPost = { title, content };
    if (post) {
      const { id } = post;
      await api.patch(`/posts/${id}`, newPost);
      router.replace(`/posts/${id}`);
    } else {
      const res = await api.post("/posts", newPost);
      const { id } = res.data;
      router.replace(`/posts/${id}`);
    }
  }

  return (
    <View style={styles.container}>
      <Section title="Imagem">
        <ImageInput></ImageInput>
      </Section>
      <Section title="Título">
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
      </Section>
      <Section title="Conteúdo">
        <Controller
          name="content"
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              multiline
              value={value}
              onBlur={onBlur}
              numberOfLines={5}
              style={styles.input}
              onChangeText={(value) => onChange(value)}
            />
          )}
        />
        {errors.content && <ErrorMessage></ErrorMessage>}
      </Section>
      <Button title="Button" onPress={handleSubmit(submit)} />
    </View>
  );
}
