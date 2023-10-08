import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import answerJson from "../data/answer.json";
import { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function MessageInput(props) {
  const [content, setContent] = useState();

  const addMsg = async (sender, content) => {

    const jsonValue = await AsyncStorage.getItem('messages');
    const dataStorage = JSON.parse(jsonValue);

    dataStorage.push({
      id: dataStorage.length + 1,
      userId: sender,
      recipientId: 2,
      content: content,
    });

    try {
      const jsonValue = JSON.stringify(dataStorage);
      await AsyncStorage.setItem('messages', jsonValue);

      
    } catch (error) {
      console.error('Error storing data:', error);
    }

    showStorage();
  }

  const answerRandomMessage = async () => {
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * answerJson.length)
      const randomAnswer = answerJson[randomIndex];
      addMsg(2, randomAnswer);
    }, 2000);
  };


  const showStorage = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('messages');
      if (jsonValue != null) {
        console.log(JSON.parse(jsonValue));
      } else {
        console.log("null");
      }
    } catch (error) {
        console.error('Error storing data:', error);
    }
  };

  const onSendMessage = async () => {
    if (content) {
      await addMsg(props.userId, content);
      answerRandomMessage();
      setContent("");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputText}
        placeholder="Message"
        placeholderTextColor={"#86939C"}
        value={content}
        onChangeText={(content) => setContent(content)}
      />
      <TouchableOpacity style={styles.sendText} onPress={onSendMessage}>
        <Image style={styles.btnImg} source={require("../assets/send.png")} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "96%",
    height: 60,
    display: "flex",
    flexDirection: "row",
    marginBottom: 12,
    marginTop: 12,
    alignSelf: "center",
  },
  inputText: {
    backgroundColor: "#1E2B31",
    height: "100%",
    width: "84%",
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
    paddingLeft: 20,
    color: "white",
  },
  sendText: {
    height: "100%",
    width: "16%",
    backgroundColor: "#1E2B31",
    justifyContent: "center",
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
  },
  btnImg: {
    height: 25,
    width: 25,
    margin: 14,
  },
});
