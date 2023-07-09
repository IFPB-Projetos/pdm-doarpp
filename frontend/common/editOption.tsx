import { FontAwesome5 } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Href } from "expo-router/build/link/href";
import { Text, View } from "react-native";
import { styles } from "./optionsStyle";

type Props = {
  href: Href;
  name: string;
};

export function EditOption({ name, href }: Props) {
  return (
    <Link href={href}>
      <View style={styles.button}>
        <FontAwesome5 name="pen" size={24} color="gray" />
        <Text style={styles.text}>Editar {name}</Text>
      </View>
    </Link>
  );
}
