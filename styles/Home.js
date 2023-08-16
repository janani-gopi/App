import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    card: {
      padding: 25,
      width: "95%",
      height: 340,
      borderLeftWidth: 5,
      margin: 15,
      borderColor: "#ffb805",
    },
  
    input: {
      padding: 8,
      borderRadius: 13,
      height: 50,
      borderWidth: 1,
      borderColor: "#ffb805",
      marginTop: 40,
      margin: 20,
      fontFamily: "PoppinsReg",
    },
    header: {
      backgroundColor: "#ffb805",
      color: "white",
      display: "flex",
      flexDirection: "row",
      padding: 6,
      justifyContent: "space-between",
      marginTop:25
    },
    headerText: {
      color: "white",
      fontFamily: "PoppinsBold",
      fontSize: 20,
      textAlign: "center",
      padding: 10,
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
    },
    smalltext: {
      padding: 6,
      color: "#ffb805",
    },
    logoutbtn: {
      height: 100,
      color: "black",
    },
    navigationContainer: {
      backgroundColor: "#ecf0f1",
    },
    paragraph: {
      padding: 16,
      fontSize: 15,
      textAlign: "center",
    },
    drawerbtn:{
      backgroundColor:"#ffb805",
      padding:15,
      borderRadius:15,
      margin:20,
      width:200
    },
    btntext:{
      color:"white",
      fontSize:15,
      textAlign:"center"
    }
  });

  export {styles}
  