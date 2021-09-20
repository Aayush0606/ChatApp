import React, { useState, useCallback, useEffect } from "react";
import { Text } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";

function Example({ route, navigation }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const { name } = route.params;
    navigation.setOptions({
      title: name,
    });
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  return (
    <>
      <GiftedChat
        messages={messages}
        renderUsernameOnMessage={true}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    </>
  );
}

export default Example;
