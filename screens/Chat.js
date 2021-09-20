import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import Styles from "../styles/GlobalStyles";
import { useSelector, useDispatch } from "react-redux";
import { loggin, logout } from "../store/features/loggedReducer";
import { Icon, Input, Card, ListItem, Button } from "react-native-elements";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Firebase from "../config/firbase";
import { db } from "../config/firbase";

const Chat = ({ navigation }) => {
  const [rooms, setRooms] = useState([]);
  const [name, setName] = useState("");
  const [roomID, setRoomID] = useState("");
  const [error, setError] = useState("");
  const blankCheck = async () => {
    const checkRoomID = roomID.replace(/\s/g, "");
    if (checkRoomID === "") {
      setError("Please Enter a room ID");
    } else if (roomID.length > 5) {
      setError("Room ID should be less tha 6 characters");
    } else {
      const newRoom = {
        name: roomID,
      };
      const res = await setRooms(rooms.concat(newRoom));
      setRoomID("");
    }
  };
  const setUserName = async () => {
    const user = await Firebase.auth().currentUser;
    const details = await db.collection("userDetails").doc(user.uid).get();
    setName(details.data().name);
  };

  useEffect(() => {
    setUserName();
  }, []);
  return (
    <ScrollView>
      <View style={Styles.AndroidSafeArea}>
        <View>
          <Text style={{ textAlign: "center", margin: 5, fontWeight: "bold" }}>
            {name}
          </Text>
        </View>
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
              name="plus"
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
        <Card>
          <Card.Title>Your Rooms</Card.Title>
          <Card.Divider />
          {rooms.map((u, i) => {
            return (
              <View key={i} style={{ marginVertical: 5 }}>
                <Button
                  title={u.name}
                  raised
                  buttonStyle={{ justifyContent: "space-between" }}
                  onPress={() => {
                    navigation.navigate("ChatBox", { name: u.name });
                  }}
                />
              </View>
            );
          })}
        </Card>
      </View>
    </ScrollView>
  );
};

export default Chat;
