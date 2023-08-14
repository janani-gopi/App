import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import { data } from "../data/data";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Card } from "react-native-paper";
import { useState } from "react";
import DropdownComponent from "./Dropdown";

function Home({ navigation }) {
  const [searchInput, setSearchInput] = useState("");
  const [category, setCategory] = useState("");

  return (
    <ScrollView>
      <TextInput
        style={styles.input}
        placeholder="search here by name"
        onChangeText={(e) => {
          setSearchInput(e);
        }}
      ></TextInput>
      <DropdownComponent setvalue={setCategory} value={category} />
      <View style={styles.container}>
        {data
          .filter((each_data) => {
            if (category || searchInput) {
              if (category == each_data.category) {
                if (searchInput) {
                  if (each_data.name.includes(searchInput)) {
                    return each_data;
                  }
                } else {
                  return each_data;
                }
              }
              if (searchInput) {
                if (each_data.name.includes(searchInput)) {
                  return each_data;
                }
              }
            } else return each_data;
          })
          ?.map(({ image, id, name, category }) => {
            return (
              <Card style={styles.card} key={id}>
                <Image source={{ uri: image }} style={styles.image} />
                <Text style={styles.text}>{name}</Text>
                <Text style={styles.smalltext}>{category}</Text>
              </Card>
            );
          })}
      </View>
    </ScrollView>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    padding: 20,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    height: 340,
  },
  input: {
    padding: 5,
    borderRadius: 20,
    height: 50,
    borderWidth: 2,
    borderColor: "lightgray",
    marginTop: 40,
    margin: 20,
    backgroundColor: "lightgray",
  },
  image: {
    padding: 10,
    height: 220,
    borderRadius: 25,
    width: 350,
  },
  text: {
    padding: 10,
    fontSize: 25,
    textAlign: "center",
  },
  smalltext: {
    padding: 6,
    color: "gray",
  },
});
