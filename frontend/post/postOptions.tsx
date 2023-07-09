import { FontAwesome5 } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import { api } from "../common/api";
import { DeleteOption } from "../common/deleteOption";
import { EditOption } from "../common/editOption";
import { styles } from "../common/optionsStyle";
import { useOpen } from "../common/useOpen";

type Props = {
  id: string;
};

export default function PostOptions({ id }: Props) {
  const router = useRouter();
  const { close, isOpen, open } = useOpen();

  async function handleDeletePress() {
    await api.delete(`/posts/${id}`);
    router.replace("/");
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
              onPress={handleDeletePress}
              name="postagem"
            ></DeleteOption>
            <EditOption
              name="postagem"
              href={{ pathname: `/posts/edit/${id}` }}
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
