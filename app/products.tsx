import { View, Text, FlatList, Image, StyleSheet } from "react-native";

const products = [
  {
    id: "1",
    name: "Hydrating Face Cream",
    price: "€29.99",
    image: require("../assets/images/hydrating_cream.webp"),
  },
  {
    id: "2",
    name: "Matte Lipstick",
    price: "€19.99",
    image: require("../assets/images/matte_lipstick.jpeg"),
  },
  {
    id: "3",
    name: "Glow Foundation",
    price: "€24.99",
    image: require("../assets/images/glow_foundation.avif"),
  },
];

export default function Products() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>✨ Beauty Picks</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    alignItems: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#e91e63",
    marginBottom: 20,
  },
  card: {
    alignItems: "center",
    marginBottom: 25,
    backgroundColor: "#fdf1f5",
    borderRadius: 12,
    padding: 10,
    width: 260,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 10,
    color: "#333",
  },
  price: {
    fontSize: 14,
    color: "#666",
  },
});
