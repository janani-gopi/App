import { View, ImageBackground, Text, StyleSheet } from "react-native";
import Button from "../components/Button";
import { StatusBar } from "expo-status-bar";

const IMAGE = {
  uri: "https://img.freepik.com/free-photo/top-view-meals-tasty-yummy-different-pastries-dishes-brown-surface_140725-14554.jpg",
};

function Action({ navigation }) {
  function onhandleLogin() {
    navigation.navigate("Login");
  }
  function onhandleSignup() {
    navigation.navigate("Signup");
  }
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundimg}
        resizeMode="cover"
        source={IMAGE}
      >
        <View style={styles.overlay} />
        <Text style={styles.text}>DELIVERED FAST FOOD TO YOUR DOOR</Text>
        <StatusBar style="auto" />
        <Button text="Login" color="#ffb805" onpressFunc={onhandleLogin} />
        <Button text="Signup" color="#0077b6" onpressFunc={onhandleSignup} />
      </ImageBackground>
    </View>
  );
}

export default Action;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 60,
    color: "white",
    padding: 35,
    paddingBottom: 70,
    textAlign: "left",
  },
  backgroundimg: {
    flex: 1,
    justifyContent: "center",
    width: 400,
  },
  overlay: {
    flex: 1,
    position: "absolute",
    left: 0,
    top: 0,
    opacity: 0.4,
    backgroundColor: "black",
    height: 1000,
    width: 400,
  },
});
