import { Link } from "expo-router";
import { StyleSheet, View } from "react-native";
import MapView from "react-native-maps";

export function MapScreen() {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <MapView style={styles.map} />
      </View>
      <View>
        <Link href="/">Voltar</Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  screen: {
    flex: 1,
  },
});
