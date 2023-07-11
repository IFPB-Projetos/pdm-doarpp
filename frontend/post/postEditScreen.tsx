import { Controller, useForm } from "react-hook-form";
import { Button, ScrollView, TextInput, View } from "react-native";
import { ErrorMessage } from "../common/errorMessage";
import { styles } from "../common/formStyles";
import { Section } from "../common/section";
import ImageInput from "../upload/imageInput";

type Props = {
  defaultValues?: any;
  defaultImage?: string;
  submit: (data: any) => void;
};

export function PostEditScreen({ defaultValues, defaultImage, submit }: Props) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  return (
    <ScrollView>
      <View style={styles.container}>
        <Section title="Imagem">
          <Controller
            control={control}
            name="imageUpload"
            rules={{ required: !defaultImage }}
            render={({ field: { onChange, onBlur } }) => (
              <ImageInput
                onBlur={onBlur}
                defaultImage={defaultImage}
                onChange={(value) => onChange(value)}
              />
            )}
          />
          {errors.image && <ErrorMessage></ErrorMessage>}
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
    </ScrollView>
  );
}
