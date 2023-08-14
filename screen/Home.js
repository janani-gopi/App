import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import { FontAwesome } from "react-native-vector-icons/FontAwesome";
import { data } from "../data/data";
import { Card } from "react-native-paper";
import { useState } from "react";
import DropdownComponent from "./Dropdown";
import Cards from "../components/Cards";

function Home({ navigation }) {
  const [searchInput, setSearchInput] = useState("");
  const [category, setCategory] = useState("");


  return (
    <ScrollView>
      <Text style={styles.header}>Foodo</Text>
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
                  if (
                    each_data.name
                      .toLowerCase()
                      .includes(searchInput.toLowerCase())
                  ) {
                    return each_data;
                  }
                } else {
                  return each_data;
                }
              }
              if (searchInput) {
                if (
                  each_data.name
                    .toLowerCase()
                    .includes(searchInput.toLowerCase())
                ) {
                  return each_data;
                }
              }
            } else return each_data;
          })
          ?.map(({ image, id, name, category, rating }) => {
            return (
              <Cards
                image={image}
                key={id}
                name={name}
                category={category}
                rating={rating}
              />
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
    padding: 25,
    width: "95%",
    height: 340,
    borderLeftWidth: 5,
    margin: 15,
    borderColor: "#ffb805",
  },

  input: {
    padding: 8,
    borderRadius: 13,
    height: 50,
    borderWidth: 1,
    borderColor: "#ffb805",
    marginTop: 40,
    margin: 20,
    fontFamily:"PoppinsReg"
  },
  header: {
    backgroundColor: "#ffb805",
    fontSize: 20,
    padding: 20,
    color: "white",
    marginTop: 25,
    textAlign: "center",
    fontFamily:"PoppinsBold"
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
  },
  smalltext: {
    padding: 6,
    color: "#ffb805",
  },
});

{
  /* <Card style={styles.card} key={id}>
                <Image source={{ uri: image }} style={styles.image} />
                <Text style={styles.text}>{name}</Text>
                <Text style={styles.smalltext}>{category}</Text>
              </Card> */
}
