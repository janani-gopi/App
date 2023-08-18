import { View, Text, ImageBackground, ActivityIndicator } from "react-native";
import { useState } from "react";
import Button from "../components/Button";
import Textinput from "../components/Textinput";
import { styles } from "../styles/Login";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "../FirebaseConfig";

const image = {
  uri: "https://img.freepik.com/free-photo/top-view-meals-tasty-yummy-different-pastries-dishes-brown-surface_140725-14554.jpg",
};

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  //loading state
  const [loading, setLoading] = useState(false);

  //firebase auth
  const auth = FIREBASE_AUTH;

  async function onhandleLogin() {
    //email validation
    if (email === "") setEmailError("Please enter email");
    else setEmailError("");
    //password validation
    if (password === "") setPasswordError("Please enter password");
    else setPasswordError("");
    //authentication
    if (email && password) {
      try {
        setLoading(true);
        const response = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        response && navigation.navigate("Bottomtab");
      } catch (error) {
        console.log(error);
        alert("Please enter valid details");
      } finally {
        setLoading(false);
      }
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
            {loading ? (
              <ActivityIndicator size="small" color="#ffb805" />
            ) : (
              <Button
                text="Login"
                color="#ffb805"
                onpressFunc={onhandleLogin}
              />
            )}
            <Text style={styles.smalltext}>Forgot password?</Text>
          </View>
        </ImageBackground>
      </View>
    </>
  );
}
