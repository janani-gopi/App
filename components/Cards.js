import { Text, StyleSheet, Image, View } from "react-native";
import { Card } from "react-native-paper";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function Cards({ image, name, category, rating }) {
  let ratings = [];
  for (let i = 0; i < rating; i++) {
    ratings.push(<FontAwesome name="star" style={styles.icon} />);
  }
  return (
    <Card style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.text}>{name}</Text>
      <View style={styles.div}>
        <Text style={styles.smalltext}>{category}</Text>
        <View style={styles.ratingdiv}>{ratings}</View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 25,
    width: "95%",
    height: 340,
    borderLeftWidth: 5,
    margin: 15,
    borderColor: "#ffb805",
  },
  image: {
    padding: 10,
    height: 220,
    borderRadius: 25,
    width: 300,
  },
  text: {
    padding: 10,
    fontSize: 20,
    color: "gray",
    textAlign: "center",
    fontFamily:"PoppinsReg"
  },
  smalltext: {
    padding: 6,
    color: "#ffb805",
    fontFamily:"PoppinsReg"
  },
  div: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  icon: {
    color: "#ffb805",
    fontSize: 20,
    padding: 2,
  },
  ratingdiv:{
    display:"flex",
    flexDirection:"row",
  }
});
