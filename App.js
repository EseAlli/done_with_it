import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  console.log("App Loading");
  return (
    <View style={styles.container}>
      <Text>HELLO WORLD</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BADA55",
    alignItems: "center",
    justifyContent: "center",
  },
});
