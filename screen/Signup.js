import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import Textinput from "../components/Textinput";
import Button from "../components/Button";
import { useState } from "react";

export default function Signup({ navigation }) {
  //state initialization
  const [username, setUsername] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // userdetails obj
  let userAuth = {
    username: "",
    email: "",
    password: "",
  };

  function onhandleSignup() {
    //usernamevalidation
    username
      ? (userAuth.username = username)
      : setNameError("Username is required");
    //emailvalidation
    email ? (userAuth.email = email) : setEmailError("Email cannot be blank");
    //passwordvalidation
    password
      ? (userAuth.password = password)
      : setPasswordError("Please set your password");

    if (username && email && password) {
      navigation.navigate("Login", {
        user: userAuth,
      });
    }
  }
  return (
    // <KeyboardAvoidingView>
    // 
    //<TouchableOpacity onPress={() => Keyboard.dismiss}>
    <ScrollView>
    <View style={styles.signupcontainer}>
      <Text style={styles.text}>Create an account</Text>
      <Textinput placeholder="Username" state={setUsername} />
      {nameError && <Text style={styles.errortext}>{nameError}</Text>}
      <Textinput placeholder="Email" state={setEmail} />
      {emailError && <Text style={styles.errortext}>{emailError}</Text>}
      <Textinput placeholder="Phone" />
      <Textinput placeholder="Dateofbirth" />
      <Textinput placeholder="Password" state={setPassword} />
      {passwordError && <Text style={styles.errortext}>{passwordError}</Text>}
      <Button text="Sign up" color="#ffb805" onpressFunc={onhandleSignup} />
    </View>
    </ScrollView>
    //     </TouchableOpacity>
    //</ScrollView>
    // </KeyboardAvoidingView>
  );
}

//styles
const styles = StyleSheet.create({
  signupcontainer: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 30,
    paddingTop: 60,
    paddingBottom: 6,
  },
  smalltext: {
    textAlign: "center",
    padding: 20,
  },
  errortext: {
    fontSize: 12,
    marginLeft: 15,
    marginTop: -15,
    color: "red",
  },
});
