import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import Styles from "../styles/GlobalStyles";
import { useSelector, useDispatch } from "react-redux";
import { loggin, logout } from "../store/features/loggedReducer";
import { Icon } from "react-native-elements";
import { Input } from "react-native-elements";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Button } from "react-native-elements";
import firebase from "../config/firbase";
import "firebase/auth";

function Signup({ navigation }) {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const blankCheck = () => {
    const chekName = name.replace(/\s/g, "");
    const chekEmail = email.replace(/\s/g, "");
    const chekPass = pass.replace(/\s/g, "");
    if (chekName === "" || chekEmail === "" || chekPass === "") {
      setError("Please fill all the above fields");
    } else {
      signUp();
    }
  };

  const signUp = async () => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, pass);
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={Styles.container}>
          <MaterialCommunityIcons name="pig" size={50} color="black" />

          <Input
            label="Name"
            value={name}
            onChangeText={(val) => {
              setError("");
              setName(val);
            }}
            leftIcon={{ type: "Ionicons", name: "person" }}
          />
          <Input
            label="Email"
            value={email}
            onChangeText={(val) => {
              setError("");
              setEmail(val);
            }}
            leftIcon={{ type: "MaterialCommunityIcons", name: "email" }}
          />
          <Input
            secureTextEntry={true}
            label="Password"
            value={pass}
            onChangeText={(val) => {
              setError("");
              setPass(val);
            }}
            leftIcon={{ type: "FontAwesome5", name: "lock" }}
          />
          {error ? (
            <Text style={{ color: "red" }}>{error}</Text>
          ) : (
            <Text>{error}</Text>
          )}
          <TouchableOpacity>
            <Icon
              type="antdesign"
              name="login"
              reverse
              onPress={() => {
                blankCheck();
              }}
            />
          </TouchableOpacity>
          <View style={{ alignSelf: "flex-end", marginHorizontal: 10 }}>
            <Text style={{ alignSelf: "center", fontWeight: "bold" }}>Or</Text>
            <TouchableOpacity>
              <Button
                title="Login"
                raised
                onPress={() => {
                  navigation.navigate("Login");
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}

export default Signup;