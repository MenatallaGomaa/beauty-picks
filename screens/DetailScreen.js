import { Image, StyleSheet, Text, View } from "react-native";

export default function DetailScreen({ route }) {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.category}>{item.category}</Text>
      <Text style={styles.price}>{item.price}</Text>
      <Text style={styles.desc}>{item.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  image: { width: 250, height: 300, borderRadius: 20 },
  name: { fontSize: 20, fontWeight: "700", marginTop: 20 },
  category: { color: "#777", marginVertical: 5 },
  price: { color: "#ff6f00", fontWeight: "600", marginBottom: 10 },
  desc: { textAlign: "center", color: "#555" },
});
