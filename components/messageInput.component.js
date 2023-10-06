import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import data from "../data/data.json";
import { useState } from "react";

export default function MessageInput(props) {
  const [msg, setMsg] = useState("");

  const addMsg = () => {
    data.push({
      id: data[data.length - 1].id + 1,
      userId: props.userId,
      recipientId: 2,
      content: msg,
    });
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputText}
        placeholder="Message"
        placeholderTextColor={"#86939C"}
        onChangeText={(msg) => setMsg(msg)}
      />
      <TouchableOpacity style={styles.sendText} onPress={addMsg}>
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
