import React, {
  useState,
  useCallback,
  useEffect,
  useLayoutEffect,
} from "react";
import { Text } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import { db } from "../config/firbase";

function Example({ route, navigation }) {
  const [messages, setMessages] = useState([]);
  const { userName, userID, title } = route.params;

  useLayoutEffect(() => {
    const data = db
      .collection("roomsData")
      .doc(title)
      .collection("messages")
      .orderBy("createdAt", "desc");
    const allMsgData = data.onSnapshot((snaps) => {
      const allMsg = snaps.docs.map((snap) => {
        return {
          ...snap.data(),
          createdAt: snap.data().createdAt.toDate(),
        };
      });
      setMessages(allMsg);
    });

    return () => {
      allMsgData();
    };
  }, []);

  const onSend = useCallback((messages = []) => {
    console.log(messages);
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
    const { _id, createdAt, text, user } = messages[0];
    db.collection("roomsData").doc(title).collection("messages").add({
      _id,
      createdAt,
      text,
      user,
    });
  }, []);

  return (
    <>
      <GiftedChat
        messages={messages}
        renderUsernameOnMessage={true}
        onSend={(messages) => onSend(messages)}
        scrollToBottom
        user={{
          _id: userID,
          name: userName,
          avatar:
            "https://library.kissclipart.com/20180901/vuq/kissclipart-pig-face-cartoon-clipart-pig-clip-art-08bd91cbdaf88f4c.png",
        }}
      />
    </>
  );
}

export default Example;
