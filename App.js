import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Action from "./screen/Action";
import Login from "./screen/Login";
import Signup from "./screen/Signup";
import Home from "./screen/Home";
import Profile from "./screen/Profile";
import Setting from "./screen/Setting";
import Bottomtab from "./screen/Bottomtab";
import { useFonts } from "expo-font";
import { getAuth,onAuthStateChanged } from "firebase/auth";
import { useEffect,useState } from "react";
import { FIREBASE_AUTH } from "./FirebaseConfig";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    PoppinsBold: require("./assets/fonts/Poppins-Bold.ttf"),
    PoppinsReg: require("./assets/fonts/Poppins-Regular.ttf"),
  });
  //user state
 const [user,setUser] = useState(null)
 const auth = getAuth();

 useEffect(()=>{
 onAuthStateChanged(auth, (user)=>{
  setUser(user)
  console.log(user)
 
 })
 
 },[])
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown:false,
        }}
        initialRouteName={user ? "Bottomtab" : "Action"}
      >
        {
          user? <Stack.Screen name="Bottomtab" component={Bottomtab} /> :  <Stack.Screen name="Action" component={Action} /> 
        }
         <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Signup" component={Signup} />
       
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="Login" component={Login}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
