import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Styles from "../styles/GlobalStyles";
import { Icon } from "react-native-elements";
import { Input } from "react-native-elements";
import { Button } from "react-native-elements";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { color } from "react-native-elements/dist/helpers";
import { setStatusBarBackgroundColor } from "expo-status-bar";

const Room = () => {
  return (
    <View style={Styles.container}>
      <MaterialCommunityIcons name="pig" size={50} color="black" />
      <Input
        label="Room ID"
        placeholder="Room ID..."
        leftIcon={{ type: "MaterialIcons", name: "chat-bubble" }}
      />
      <TouchableOpacity>
        <Button style={{ color: "red" }} title="Join" type="outline" />
      </TouchableOpacity>
    </View>
  );
};

export default Room;
