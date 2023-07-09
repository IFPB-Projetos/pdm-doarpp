import { Controller, useForm } from "react-hook-form";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export function PostEditScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      content: "",
    },
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  console.log("errors", errors);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>Título</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
          name="title"
          rules={{ required: true }}
        />
      </View>
      <View>
        <Text style={styles.label}>Conteúdo</Text>
        <Controller
          control={control}
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
          name="content"
          rules={{ required: true }}
        />
      </View>

      <Button title="Button" onPress={handleSubmit(onSubmit)} />
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
