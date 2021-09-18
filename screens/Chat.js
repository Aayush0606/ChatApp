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

const Chat = () => {
  return (
    <View style={Styles.AndroidSafeArea}>
      <MaterialCommunityIcons
        name="pig"
        size={50}
        color="black"
        style={{ alignSelf: "center" }}
      />
      <View style={Styles.outerBox}>
        <Text>Hi</Text>
      </View>
    </View>
  );
};

export default Chat;
