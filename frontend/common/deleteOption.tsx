import { FontAwesome5 } from "@expo/vector-icons";
import { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./optionsStyle";

type Props = {
  onPress: () => void;
  name: string;
};

export function DeleteOption({ onPress, name }: Props) {
  const [pressed, setPressed] = useState(false);

  function handlePress() {
    if (!pressed) {
      setPressed(true);
      setTimeout(() => setPressed(false), 5000);
    } else {
      onPress();
    }
  }

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <FontAwesome5 name="trash" size={24} color="red" />
      <Text style={{ ...styles.text, color: pressed ? "red" : undefined }}>
        {pressed ? "Toque para confirmar apagar" : `Apagar ${name}`}
      </Text>
    </TouchableOpacity>
  );
}
