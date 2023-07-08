import { FontAwesome5 } from "@expo/vector-icons";
import { useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import { DeleteOption } from "./deleteOption";
import { styles } from "./optionsStyle";

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
          <DeleteOption></DeleteOption>
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
