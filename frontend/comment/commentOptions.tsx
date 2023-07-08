import { FontAwesome5 } from "@expo/vector-icons";
import { useState } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CommentOptions() {
  const [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return (
    <>
      <TouchableOpacity style={{ marginLeft: "auto" }} onPress={open}>
        <FontAwesome5 name="ellipsis-h" size={24} color="gray" />
      </TouchableOpacity>

      <Modal
        visible={isOpen}
        animationType="slide"
        onRequestClose={close}
        presentationStyle="overFullScreen"
      >
        <View>
          <TouchableOpacity style={styles.button}>
            <FontAwesome5 name="trash" size={24} color="red" />
            <Text style={styles.text}>Apagar comentário</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <FontAwesome5 name="pen" size={24} color="gray" />
            <Text style={styles.text}>Editar comentário</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={close}>
            <Text style={styles.text}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
  button: {
    gap: 10,
    padding: 10,
    flexDirection: "row",
  },
});
