import { useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { products } from "../products";

export default function HomeScreen({ navigation }) {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("Details", { item })}
    >
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>
      <TouchableOpacity onPress={() => toggleFavorite(item.id)}>
        <Text
          style={[
            styles.heart,
            favorites.includes(item.id) && styles.filledHeart,
          ]}
        >
          {favorites.includes(item.id) ? "❤️" : "🤍"}
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 10 },
  card: {
    flex: 1,
    margin: 8,
    padding: 10,
    borderRadius: 12,
    backgroundColor: "#f9f9f9",
    alignItems: "center",
    elevation: 2,
  },
  image: { width: 120, height: 150, borderRadius: 10 },
  name: { marginTop: 10, fontWeight: "600" },
  price: { color: "#ff6f00", marginVertical: 5 },
  heart: { fontSize: 20 },
  filledHeart: { color: "red" },
});
