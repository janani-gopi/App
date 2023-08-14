
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home"
import Profile from "./Profile";
import Setting from "./Setting";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

export default function Mytabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        headerStyle: { backgroundColor: "#00A8E8" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
        tabBarActiveTintColor: "#00A8E8",
        tabBarInactiveTintColor: "gray",
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Setting") {
            iconName = focused
              ? "account-settings"
              : "account-settings-outline";
          } else if (route.name === "Home") {
            iconName = focused ? "home-circle" : "home-circle-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "account-circle" : "account-circle-outline";
          }
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
      })}
      initialRouteName="Home"
    >
      <Tab.Screen name="Setting" component={Setting} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
