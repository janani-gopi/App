import { Text, StyleSheet, Image, View } from "react-native";
import { Card } from "react-native-paper";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {styles} from "../styles/Cards"

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

