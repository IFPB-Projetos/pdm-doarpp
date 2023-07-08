import { FontAwesome5 } from "@expo/vector-icons";
import { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./optionsStyle";

export function DeleteOption() {
  const [pressed, setPressed] = useState(false);

  function handlePress() {
    if (!pressed) {
      setPressed(true);
      setTimeout(() => setPressed(false), 5000);
    }
  }

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <FontAwesome5 name="trash" size={24} color="red" />
      <Text style={{ ...styles.text, color: pressed ? "red" : undefined }}>
        {pressed ? "Toque para confirmar apagar" : "Apagar comentário"}
      </Text>
    </TouchableOpacity>
  );
}
