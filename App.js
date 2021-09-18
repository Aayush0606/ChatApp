import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Styles from "./styles/GlobalStyles";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Room from "./screens/Room";
import Chat from "./screens/Chat";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native-elements";
import { Icon } from "react-native-elements";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTintColor: "black",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
            headerRight: () => (
              <Button
                type="clear"
                icon={<Icon type="Entypo" name="home" raised />}
              />
            ),
          }}
        >
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{ title: "Signup For SuarChat" }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: "Login For SuarChat" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

{
  /* <Signup /> */
}
{
  /* <Login /> */
}
{
  /* <Room /> */
}
