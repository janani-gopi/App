import { View, Text, Pressable } from "react-native";

function Button({ text, color,onpressFunc}) {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Pressable
        style={{
          heigth: 200,
          width: 350,
          backgroundColor: `${color}`,
          padding: 15,
          borderRadius: 25,
          margin: 10,
        }}
        onPress={onpressFunc}
      >
        <Text style={{ textAlign: "center", color: "white", fontSize: 18 }}>
          {text}
        </Text>
      </Pressable>
    </View>
  );
}

export default Button;
