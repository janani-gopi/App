import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
} from "react-native";
import Button from "../components/Button";
import Textinput from "../components/Textinput";
const image = {
  uri: "https://img.freepik.com/free-photo/top-view-meals-tasty-yummy-different-pastries-dishes-brown-surface_140725-14554.jpg",
};

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundimg}
        resizeMode="cover"
        source={image}
      >
        <View style={styles.logindiv}>
          <Text style={styles.text}>Welcome Back</Text>
          <Text style={styles.smalltext}>Login to your account</Text>
          <Textinput placeholder="email" />
          <Textinput placeholder="password" />
          <Button
            text="Login"
            color="#ffb805"
            navigation={navigation}
            navigateto="Home"
          />
          <Text style={styles.smalltext}>Forgot password?</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    paddingTop: 20,
    paddingBottom: 6,
    fontSize: 30,
    textAlign: "center",
  },
  smalltext: {
    paddingBottom: 20,
    fontSize: 15,
    color: "gray",
    textAlign: "center",
  },
  input: {
    padding: 15,
    border: "none",
    backgroundColor: "lightgray",
    borderRadius: 25,
    margin: 5,
    marginBottom: 20,
    marginRight: 10,
  },
  logindiv: {
    backgroundColor: "white",
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    right: 0,
    left: 0,
    padding: 20,
    position: "absolute",
    bottom: 0,
    height: 430,
  },
  backgroundimg: {
    flex: 1,
    justifyContent: "center",
    width: 400,
    marginTop: 25,
  },
});
