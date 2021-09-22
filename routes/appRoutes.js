import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loggin, logout } from "../store/features/loggedReducer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Chat from "../screens/Chat";
import ChatBox from "../screens/ChatBox";
import Firebase from "../config/firbase";
import { Button } from "react-native-elements";
import { Icon } from "react-native-elements";
import Signup from "../screens/Signup";
import Login from "../screens/Login";
import { db } from "../config/firbase";

export default function roomsRoute() {
  const dispatch = useDispatch();
  const handleLogout = async () => {
    try {
      await Firebase.auth().signOut();
      dispatch(logout());
    } catch (error) {
      console.log(error);
    }
  };

  const value = useSelector((state) => state.checkLogin.value);
  const Stack = createNativeStackNavigator();

  return (
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
              onPress={handleLogout}
              type="clear"
              icon={<Icon type="AntDesign" name="logout" raised />}
            />
          ),
        }}
      >
        {value === true ? (
          <>
            <Stack.Screen
              name="Chat"
              component={Chat}
              options={{ title: `Welcome` }}
            />
            <Stack.Screen name="ChatBox" component={ChatBox} />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{ title: "Signup For ChatApp", headerRight: null }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ title: "Login For ChatApp", headerRight: null }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
