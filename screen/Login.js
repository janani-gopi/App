import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Image,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useState } from "react";
import Button from "../components/Button";
import Textinput from "../components/Textinput";
const image = {
  uri: "https://img.freepik.com/free-photo/top-view-meals-tasty-yummy-different-pastries-dishes-brown-surface_140725-14554.jpg",
};

export default function Login({ navigation, route }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const signupEmail = route?.params?.user.email;
  const signupPassword = route?.params?.user.password;

  function onhandleLogin() {
    //email validation
    if (email === "") setEmailError("Please enter email");
    else setEmailError("");
    //password validation
    if (password === "") setPasswordError("Please enter password");
    else setPasswordError("");
    //authentication
    if (email == signupEmail && password == signupPassword) {
      navigation.navigate("Home");
    } else if (email && password) {
      alert("Please enter valid login details");
    }
  }
  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          style={styles.backgroundimg}
          resizeMode="cover"
          source={image}
        >
          <View style={styles.logindiv}>
            <Text style={styles.text}>Welcome Back</Text>
            <Text style={styles.smalltext}>Login to your account</Text>
            <Textinput placeholder="email" state={setEmail} />
            {emailError && <Text style={styles.errortext}>{emailError}</Text>}
            <Textinput placeholder="password" state={setPassword} />
            {passwordError && (
              <Text style={styles.errortext}>{passwordError}</Text>
            )}
            <Button text="Login" color="#ffb805" onpressFunc={onhandleLogin} />
            <Text style={styles.smalltext}>Forgot password?</Text>
          </View>
        </ImageBackground>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
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
    position: "absolute",
    padding: 20,
    bottom: 0,
    right: 0,
  },
  backgroundimg: {
    flex: 1,
    justifyContent: "center",
    width: 400,
    marginTop: 25,
  },
  errortext: {
    fontSize: 12,
    marginLeft: 15,
    marginTop: -15,
    color: "red",
  },
});
