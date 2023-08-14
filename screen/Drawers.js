import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./Home";
import Profile from "./Profile";
import Setting from "./Setting";
import Ionicons from "@expo/vector-icons/Ionicons";
import { FontAwesome } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

export default function Drawers() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: "#00A8E8" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
        drawerActiveBackgroundColor: "lightgray",
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerLabel: "Home",
          drawerLabelStyle: { color: "#00A8E8", fontSize: 20 },
          title: "Home",
          drawerIcon: () => <Ionicons name="home" color="#00A8E8" size={20} />,
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerLabel: "Profile",
          drawerLabelStyle: { color: "#00A8E8", fontSize: 20 },
          title: "Profile",
          drawerIcon: () => (
            <FontAwesome name="user" color="#00A8E8" size={20} />
          ),
        }}
      />
      <Drawer.Screen
        name="Setting"
        component={Setting}
        options={{
          drawerLabel: "Setting",
          drawerLabelStyle: { color: "#00A8E8", fontSize: 20 },
          title: "Setting",
          drawerIcon: () => (
            <Ionicons name="settings-sharp" color="#00A8E8" size={20} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
