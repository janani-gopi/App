import { View, TextInput, StyleSheet } from "react-native";

export default function Textinput({ placeholder }) {
  return (
    <View>
      <TextInput style={styles.input} placeholder={placeholder}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    border: "none",
    backgroundColor: "lightgray",
    borderRadius: 25,
    margin: 5,
    marginBottom: 10,
    marginRight: 10,
  },
});
