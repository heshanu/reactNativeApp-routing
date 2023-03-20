import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

import LittleLemonHeader from "./components/LittleLemonHeader";
import LittleLemonFooter from "./components/LittleLemonFooter";
import WelcomeScreen from "./components/WelcomeScreen";
import LoginScreen from "./components/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MenuItems from "./components/MenuItems";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <View style={styles.container}>
          <LittleLemonHeader />
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="MenuItems" component={MenuItems} />
          </Stack.Navigator>
        </View>
        <View style={styles.footerContainer}>
          <LittleLemonFooter />
        </View>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
  },
  footerContainer: { backgroundColor: "#333333" },
  container: {
    flex: 1,
    backgroundColor: "#333333",
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: "#EDEFEE",
    textAlign: "center",
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
  },
  inputBox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "EDEFEE",
    backgroundColor: "#EDEFEE",
  },
  button: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 100,
    backgroundColor: "#EE9972",
    borderColor: "#EE9972",
    borderWidth: 2,
    borderRadius: 50,
  },
  buttonText: {
    color: "black",
    textAlign: "center",
    fontSize: 25,
  },
});
