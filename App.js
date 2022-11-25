import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LocationPicker from "./Screen/LocationPicker";
import Map from "./Screen/Map";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon1 from "./Screen/Icon1";
import Icon2 from "./Screen/Icon2";
import Icon3 from "./Screen/Icon3";
import Icon4 from "./Screen/Icon4";
import { Ionicons, Entypo } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Icon1"
          component={Icon1}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color, size }) => (
              <Entypo name="compass" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Icon2"
          component={Icon2}
          options={{
            title: "Hello!",
            tabBarLabel: "",
            tabBarIcon: ({ color, size }) => (
              <Entypo name="map" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Home"
          component={Map}
          options={{
            title: "Hello!",
            tabBarLabel: "",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="add-circle-sharp" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Icon3"
          component={Icon3}
          options={{
            title: "Hello!",
            tabBarLabel: "",
            tabBarIcon: ({ color, size }) => (
              <Entypo name="bell" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Icon4"
          component={Icon4}
          options={{
            title: "Hello!",
            tabBarLabel: "",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-person" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
