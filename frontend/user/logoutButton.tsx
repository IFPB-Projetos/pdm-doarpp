import { FontAwesome } from "@expo/vector-icons";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import { useAuth } from "../auth/authContext";
import { styles } from "../common/optionsStyle";
import { useOpen } from "../common/useOpen";
import { userStyles } from "./userStyles";

export function LogoutButton() {
  const { isOpen, open, close } = useOpen();
  const { logout } = useAuth();

  return (
    <>
      <TouchableOpacity onPress={open}>
        <Text style={userStyles.topButton}>Sair</Text>
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
            <Text style={{ fontSize: 16 }}>
              Tem certeza que quer fazer logout?
            </Text>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                onPress={logout}
                style={{ ...styles.button, flex: 1, justifyContent: "center" }}
              >
                <FontAwesome name="sign-out" size={24} color="gray" />
                <Text style={styles.text}>Sair</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={close}
                style={{ ...styles.button, flex: 1, justifyContent: "center" }}
              >
                <Text style={styles.text}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}
