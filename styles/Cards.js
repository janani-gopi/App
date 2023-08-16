import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    padding: 25,
    width: "95%",
    height: 340,
    borderLeftWidth: 5,
    margin: 15,
    borderColor: "#ffb805",
  },
  image: {
    padding: 10,
    height: 220,
    borderRadius: 25,
    width: 300,
  },
  text: {
    padding: 10,
    fontSize: 20,
    color: "gray",
    textAlign: "center",
    fontFamily: "PoppinsBold",
  },
  smalltext: {
    padding: 6,
    color: "#ffb805",
    fontFamily: "PoppinsReg",
  },
  div: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  icon: {
    color: "#ffb805",
    fontSize: 20,
    padding: 2,
  },
  ratingdiv: {
    display: "flex",
    flexDirection: "row",
  },
});

export {styles}
