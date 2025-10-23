import { View, Text, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>💄 Beauty Picks</Text>
      <Text style={styles.subtitle}>Discover your next favorite product!</Text>
      <Button title="View Products" onPress={() => router.push("/products")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#e91e63",
  },
  subtitle: {
    fontSize: 18,
    color: "#555",
    marginBottom: 20,
  },
});
