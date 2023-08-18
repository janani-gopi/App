import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  ActivityIndicator,
} from "react-native";
import Textinput from "../components/Textinput";
import { useState, useCallback, useRef } from "react";
import { DatePickerModal } from "react-native-paper-dates";
import Button from "../components/Button";
import { FIREBASE_AUTH } from "../FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Signup({ navigation }) {
  //state initialization
  const [username, setUsername] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  //loading state
  const [loading, setLoading] = useState(false)
  //date states
  const [date, setDate] = useState(undefined);
  const [open, setOpen] = useState(false);
  //firebase auth
  const auth = FIREBASE_AUTH

  const onDismissSingle = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirmSingle = useCallback(
    (params) => {
      setOpen(false);
      setDate(params.date);
    },
    [setOpen, setDate]
  );

  // userdetails obj
  let userAuth = {
    username: "",
    email: "",
    password: "",
  };

  async function  onhandleSignup() {
    //usernamevalidation
    if (username) {
      if (!username.includes(" ")) userAuth.username = username;
      else setNameError("Username cannot contain spaces");
    } else {
      setNameError("Username is required");
    }
    //emailvalidation
    if (email) {
      if (!email.includes(" ")) userAuth.email = email;
      else setEmailError("Email cannot contain spaces");
    } else {
      setEmailError("Email is required");
    }
    //passwordvalidation
    if (password) {
      if (!password.includes(" ")) userAuth.password = password;
      else setPasswordError("Password cannot contain spaces");
    } else {
      setPasswordError("Password is required");
    }

    if (
      username &&
      email &&
      password &&
      !email.includes(" ") &&
      !username.includes(" ") &&
      !password.includes(" ")
    ) {
      try{
          setLoading(true)
         const response = await createUserWithEmailAndPassword(auth,email,password)
      }catch(error){
             console.log("Error:", error)
      }finally{
        setLoading(false)
        navigation.navigate("Login")
      }
    }
  }

  return (
    <ScrollView>
      <DatePickerModal
        //this property is creating a warning as 'locale en is not registered'
        locale="en"
        mode="single"
        visible={open}
        onDismiss={onDismissSingle}
        date={date}
        onConfirm={onConfirmSingle}
      />
      <View style={styles.signupcontainer}>
        <Text style={styles.text}>Create an account</Text>
        <Textinput placeholder="Username" state={setUsername} />
        {nameError && <Text style={styles.errortext}>{nameError}</Text>}
        <Textinput placeholder="Email" state={setEmail} />
        {emailError && <Text style={styles.errortext}>{emailError}</Text>}
        <Textinput placeholder="Phone" />
        <TextInput
          placeholder="Dateofbirth"
          value={date?.toLocaleDateString()}
          style={styles.input}
          onFocus={() => {
            setOpen(true);
          }}
        />
        <Textinput placeholder="Password" state={setPassword} />
        {passwordError && <Text style={styles.errortext}>{passwordError}</Text>}
       { loading ? <ActivityIndicator size="large" color="#ffb805"/> : <Button text="Sign up" color="#ffb805" onpressFunc={onhandleSignup} /> } 
      </View>
    </ScrollView>
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
  input: {
    padding: 15,
    backgroundColor: "lightgray",
    borderRadius: 25,
    margin: 10,
    marginBottom: 20,
    marginRight: 10,
    alignItems: "center",
  },
});

{
  /* <Pressable onPress={() => setOpen(true)} uppercase={false} style={{padding:40}}> </Pressable> */
}
