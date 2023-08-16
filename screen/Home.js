import {
  View,
  Text,
  Pressable,
  ScrollView,
  TextInput,
  DrawerLayoutAndroid,
} from "react-native";
import { BackHandler } from "react-native";
import { data } from "../data/data";
import { useRef, useState } from "react";
import DropdownComponent from "./Dropdown";
import Cards from "../components/Cards";
import Ionicons from "react-native-vector-icons/Ionicons";
import { styles } from "../styles/Home";

function Home({ navigation }) {
  const [searchInput, setSearchInput] = useState("");
  const [category, setCategory] = useState("");
  const drawer = useRef(null);
  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      {/* exits the app */}
      <Pressable
        onPress={() => {
          BackHandler.exitApp();
        }}
        style={styles.drawerbtn}
      >
        <Text style={styles.btntext}>Logout</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          drawer.current.closeDrawer();
        }}
        style={styles.drawerbtn}
      >
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
