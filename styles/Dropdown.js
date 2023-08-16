import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      padding: 16,
    },
    dropdown: {
      height: 50,
      borderColor: "#ffb805",
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 8,
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: "absolute",
      backgroundColor: "#ffb805",
      borderRadius:10,
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
      color:"white"
    },
    placeholderStyle: {
      fontSize: 14,
      color:"gray",
      fontFamily:"PoppinsReg"
    },
    selectedTextStyle: {
      fontSize: 16,
      color:"gray",
      fontFamily:"PoppinsReg"
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });

  export {styles}
  