import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";
import { getImageSource } from "../common/getImageSource";

export function UserEditScreen() {
  return (
    <View style={{ gap: 20, paddingHorizontal: 10 }}>
      <View style={{ alignItems: "center" }}>
        <Image
          style={{ borderRadius: 9999 }}
          source={getImageSource(user.image, 150)}
        ></Image>
      </View>
      <View style={styles.field}>
        <Text style={styles.label}>Nome</Text>
        <TextInput style={styles.input}></TextInput>
      </View>
      <View style={styles.field}>
        <Text style={styles.label}>Sobre</Text>
        <TextInput multiline numberOfLines={4} style={styles.input}></TextInput>
      </View>
      <Button title="Salvar"></Button>
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
    fontSize: 20,
  },
  label: {
    fontSize: 16,
    textAlign: "left",
  },
  field: {
    gap: 10,
  },
});
