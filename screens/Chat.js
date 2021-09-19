import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  FlatList,
  Image,
} from "react-native";
import Styles from "../styles/GlobalStyles";
import { useSelector, useDispatch } from "react-redux";
import { loggin, logout } from "../store/features/loggedReducer";
import { Icon } from "react-native-elements";
import { Input } from "react-native-elements";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Firebase from "../config/firbase";

const Chat = ({ navigation }) => {
  const [roomID, setRoomID] = useState("");
  const [error, setError] = useState("");
  const blankCheck = () => {
    const checkRoomID = roomID.replace(/\s/g, "");
    if (checkRoomID === "") {
      setError("Please Enter a room ID");
    } else {
      navigation.navigate("ChatBox");
    }
  };
  return (
    <View style={Styles.AndroidSafeArea}>
      <MaterialCommunityIcons
        name="pig"
        size={50}
        color="black"
        style={{ alignSelf: "center" }}
      />
      <View style={Styles.outerBox}>
        <Input
          label="Room ID"
          value={roomID}
          onChangeText={(val) => {
            setError("");
            setRoomID(val);
          }}
          leftIcon={{ type: "Entypo", name: "code" }}
        />
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
        {error ? (
          <Text style={{ color: "red" }}>{error}</Text>
        ) : (
          <Text>{error}</Text>
        )}
      </View>
    </View>
  );
};

export default Chat;
