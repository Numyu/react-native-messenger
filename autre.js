{
  /* <View style={styles.msgContainer}>
        {talk.map((msg, index) => (
          <View
            key={index}
            style={[
              styles.msgBox,
              [
                msg.userId === currentUser
                  ? styles.currentUserMsgBox
                  : styles.otherUserMsgBox,
              ],
            ]}
          >
            <Text
              style={[
                msg.userId === currentUser
                  ? styles.currentUserMsg
                  : styles.otherUserMsg,
              ]}
            >
              {msg.msg}
            </Text>
          </View>
        ))}
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputText}
          placeholder="Message"
          onChangeText={(msg) => setMsg(msg)}
        />
        <TouchableOpacity style={styles.sendText} onPress={sendChatBotMsg}>
          <Image style={styles.btnImg} source={require("./assets/send.png")} />
        </TouchableOpacity>
      </View> */
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "red",
    // padding: 14,
    // gap: 8,
    alignItems: "center",
    justifyContent: "space-between",
    // flexDirection: "column-reverse",
  },

  // msgContainer: {
  //   width: "100%",
  //   height: "91%",
  //   gap: 10,
  // },
  // currentUserMsg: {
  //   color: "white",
  // },
  // otherUserMsg: {
  //   color: "black",
  // },
  // msgBox: {
  //   padding: 14,
  //   maxWidth: "80%",
  // },
  // currentUserMsgBox: {
  //   backgroundColor: "#32746D",
  //   borderTopLeftRadius: 14,
  //   borderTopRightRadius: 14,
  //   borderBottomLeftRadius: 14,
  //   alignSelf: "flex-end",
  // },
  // otherUserMsgBox: {
  //   backgroundColor: "#EBEBEB",
  //   borderTopLeftRadius: 14,
  //   borderTopRightRadius: 14,
  //   borderBottomRightRadius: 14,
  //   alignSelf: "flex-start",
  // },

  // // inputText
  // inputContainer: {
  //   position: "absolute",
  //   width: "100%",
  //   height: 60,
  //   display: "flex",
  //   flexDirection: "row",
  //   marginBottom: 14,
  // },
  // inputText: {
  //   backgroundColor: "#EBEBEB",
  //   height: "100%",
  //   width: "84%",
  //   borderTopLeftRadius: 100,
  //   borderBottomLeftRadius: 100,
  //   paddingLeft: 20,
  // },
  // sendText: {
  //   height: "100%",
  //   width: "16%",
  //   backgroundColor: "#EBEBEB",
  //   justifyContent: "center",
  //   borderTopRightRadius: 100,
  //   borderBottomRightRadius: 100,
  // },
  // btnImg: {
  //   height: 25,
  //   width: 25,
  //   margin: 14,
  // },
});

const currentUser = 1;
  const otherUser = 2;

  const [msg, setMsg] = useState("");

  const users = [
    { id: 1, name: "Billy" },
    { id: 2, name: "Louis" },
  ];

  const [talk, setTalk] = useState([
    { userId: currentUser, recipientId: otherUser, msg: "wsh" },
    { userId: currentUser, recipientId: otherUser, msg: "trql ?" },
    { userId: otherUser, recipientId: currentUser, msg: "trql et toi ?" },
    { userId: currentUser, recipientId: otherUser, msg: "ça di koi la team" },
  ]);

  const sendMsg = () => {
    const newArr = [...talk];
    newArr.push({
      userId: currentUser,
      recipientId: otherUser,
      msg: msg,
    });

    setTalk(newArr);
  };

  const chatBotPressetMsg = ["Bonjour !", "vroum vroum"];

  const sendChatBotMsg = () => {
    const randomIndex =
      Math.floor(Math.random() * chatBotPressetMsg.length) + 1;
    const newArr = [...talk];
    newArr.push({
      userId: otherUser,
      recipientId: currentUser,
      msg: chatBotPressetMsg[randomIndex],
    });

    setTalk(newArr);
