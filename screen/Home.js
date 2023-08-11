import { View, Text, StyleSheet } from "react-native";




function Home() {
  return (
    <>
      <View style={styles.container}>
        <Text>Discover new palces for your next meal</Text>
      </View>  
    </>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin:0
  },
});
