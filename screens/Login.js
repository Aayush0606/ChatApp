import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Styles from "../styles/GlobalStyles";
import { useSelector, useDispatch } from "react-redux";
import { loggin, logout } from "../store/features/loggedReducer";
import { Icon } from "react-native-elements";
import { Input } from "react-native-elements";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Button } from "react-native-elements";
import firebase from "../config/firbase";

function Login({ navigation }) {
  const value = useSelector((state) => state.checkLogin.value);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const auth = firebase.auth();

  const signIn = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, pass);
      navigation.navigate("Signup");
    } catch (error) {
      setError(error.message);
    }
  };

  const blankCheck = () => {
    const chekEmail = email.replace(/\s/g, "");
    const chekPass = pass.replace(/\s/g, "");
    if (chekEmail === "" || chekPass === "") {
      setError("Please fill all the above fields");
    } else {
      signIn();
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={Styles.container}>
        <MaterialCommunityIcons name="pig" size={50} color="black" />

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
          <Button
            title="Signup"
            raised
            onPress={() => {
              navigation.navigate("Signup");
            }}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Login;
