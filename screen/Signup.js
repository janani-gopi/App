import { View, Text, StyleSheet } from "react-native";
import Textinput from "../components/Textinput";
import Button from "../components/Button";

export default function Signup({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create an account</Text>
      <Textinput placeholder="Username" />
      <Textinput placeholder="Email" />
      <Textinput placeholder="Phone" />
      <Textinput placeholder="Dateofbirth" />
      <Textinput placeholder="Password" />
      <Button
        text="Sign up"
        color="#ffb805"
        navigation={navigation}
        navigateto="Login"
      />
      <Text style={styles.smalltext}>
        By clicking Signup, you agree to the terms and conditions
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 150,
    padding: 15,
  },
  text: {
    textAlign: "center",
    fontSize: 30,
    padding: 10,
    paddingBottom: 20,
  },
  smalltext: {
    textAlign: "center",
    padding: 20,
  },
});
