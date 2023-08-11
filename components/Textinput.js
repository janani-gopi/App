import { View, TextInput, StyleSheet } from "react-native";

export default function Textinput({ placeholder, state }) {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={(e) => state(e)}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    border: "none",
    backgroundColor: "lightgray",
    borderRadius: 25,
    margin : 10,
    marginBottom: 20,
    marginRight: 10,
  },
});
