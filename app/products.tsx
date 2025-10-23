import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Platform,
} from "react-native";

const { width } = Dimensions.get("window");

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
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>✨ Beauty Picks</Text>

        {products.map((item) => (
          <View key={item.id} style={styles.card}>
            <Image
              source={item.image}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 40,
    width: "100%",
    maxWidth: 400, // locks layout width
    alignSelf: "center", // centers on web view
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#e91e63",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    alignItems: "center",
    backgroundColor: "#fdf1f5",
    borderRadius: 12,
    padding: 15,
    width: "90%", // fits screen width with margin
    marginBottom: 25,
    ...(Platform.OS === "web"
      ? {
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        }
      : {
          shadowColor: "#000",
          shadowOpacity: 0.1,
          shadowRadius: 5,
          elevation: 3,
        }),
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 10,
    color: "#333",
    textAlign: "center",
  },
  price: {
    fontSize: 14,
    color: "#666",
  },
});
