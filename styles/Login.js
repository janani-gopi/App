import { StyleSheet } from "react-native";

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
    position: "absolute",
    padding: 20,
    bottom: 0,
    right: 0,
    width: 400
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

export {styles}
