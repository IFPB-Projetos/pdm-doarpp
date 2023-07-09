import { FontAwesome } from "@expo/vector-icons";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../comment/optionsStyle";
import { useOpen } from "../comment/useOpen";
import { useAuth } from "../auth/authContext";

export function LogoutButton() {
  const { isOpen, open, close } = useOpen();
  const { logout } = useAuth();

  return (
    <>
      <TouchableOpacity onPress={open}>
        <Text
          style={{
            padding: 10,
            fontSize: 16,
            borderWidth: 1,
            borderRadius: 10,
            borderColor: "gray",
          }}
        >
          Sair
        </Text>
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
