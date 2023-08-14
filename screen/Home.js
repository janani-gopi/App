import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  Image,
  TextInput,
  Button,
  DrawerLayoutAndroid,
} from "react-native";
import {BackHandler} from 'react-native';
import { data } from "../data/data";
import { useRef, useState } from "react";
import DropdownComponent from "./Dropdown";
import Cards from "../components/Cards";
import Ionicons from "react-native-vector-icons/Ionicons";

function Home({ navigation }) {
  const [searchInput, setSearchInput] = useState("");
  const [category, setCategory] = useState("");
  const drawer = useRef(null);
  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      {/* exits the app */}
      <Pressable onPress={()=>{BackHandler.exitApp()}} style={styles.drawerbtn}>
        <Text style={styles.btntext}>Logout</Text>
      </Pressable>
      <Pressable onPress={() =>{drawer.current.closeDrawer()}} style={styles.drawerbtn}>
        <Text style={styles.btntext}>back to home</Text>
      </Pressable>
    </View>
  );
  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={"left"}
      renderNavigationView={navigationView}
    >
      <ScrollView>
        <View style={styles.header}>
          <Ionicons
            name="menu"
            color="white"
            size={40}
            padding={6}
            onPress={() => {
              drawer.current.openDrawer();
            }}
          />
          <Text style={styles.headerText}>Foodo</Text>
        </View>
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
                <View key={id}>
                  <Cards
                    image={image}
                    key={id}
                    name={name}
                    category={category}
                    rating={rating}
                  />
                </View>
              );
            })}
        </View>
      </ScrollView>
    </DrawerLayoutAndroid>
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
    fontFamily: "PoppinsReg",
  },
  header: {
    backgroundColor: "#ffb805",
    color: "white",
    display: "flex",
    flexDirection: "row",
    padding: 6,
    justifyContent: "space-between",
    marginTop:25
  },
  headerText: {
    color: "white",
    fontFamily: "PoppinsBold",
    fontSize: 20,
    textAlign: "center",
    padding: 10,
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
  logoutbtn: {
    height: 100,
    color: "black",
  },
  navigationContainer: {
    backgroundColor: "#ecf0f1",
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: "center",
  },
  drawerbtn:{
    backgroundColor:"#ffb805",
    padding:15,
    borderRadius:15,
    margin:20,
    paddingHorizontal:60
  },
  btntext:{
    color:"white",
    fontSize:15
  }
});
