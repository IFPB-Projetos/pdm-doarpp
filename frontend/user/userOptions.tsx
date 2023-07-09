import { FontAwesome5 } from "@expo/vector-icons";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import { useAuth } from "../auth/authContext";
import { api } from "../common/api";
import { DeleteOption } from "../common/deleteOption";
import { styles } from "../common/optionsStyle";
import { useOpen } from "../common/useOpen";
import { userStyles } from "./userStyles";

export default function UserOptions() {
  const { close, isOpen, open } = useOpen();

  const { logout } = useAuth();

  async function handleDeletePress() {
    await api.delete(`/users/me`);
    logout();
  }

  return (
    <>
      <TouchableOpacity style={userStyles.topButton} onPress={open}>
        <FontAwesome5 name="ellipsis-h" size={20} color="gray" />
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
              name="conta"
              onPress={handleDeletePress}
            ></DeleteOption>
            <TouchableOpacity style={styles.button} onPress={close}>
              <Text style={styles.text}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
}
