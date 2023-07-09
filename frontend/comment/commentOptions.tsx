import { FontAwesome5 } from "@expo/vector-icons";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import { api } from "../common/api";
import { DeleteOption } from "../common/deleteOption";
import { EditOption } from "../common/editOption";
import { styles } from "../common/optionsStyle";
import { useCache } from "../common/useCache";
import { useOpen } from "../common/useOpen";

type Props = {
  id: string;
};

export default function CommentOptions({ id }: Props) {
  const { close, isOpen, open } = useOpen();

  const { clear } = useCache("comments");

  function handleDeletePress() {
    api.delete(`/comments/${id}`);
    clear();
    close();
  }

  return (
    <>
      <TouchableOpacity style={{ marginLeft: "auto" }} onPress={open}>
        <FontAwesome5 name="ellipsis-h" size={24} color="gray" />
      </TouchableOpacity>

      <Modal
        transparent
        visible={isOpen}
        onRequestClose={close}
        presentationStyle="overFullScreen"
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#0008",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              borderRadius: 20,
              padding: 10,
              gap: 10,
            }}
          >
            <DeleteOption
              name="comentário"
              onPress={handleDeletePress}
            ></DeleteOption>
            <EditOption
              name="comentário"
              href={`/comments/edit/${id}`}
            ></EditOption>
            <TouchableOpacity style={styles.button} onPress={close}>
              <Text style={styles.text}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
}
