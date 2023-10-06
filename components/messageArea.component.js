import { View, Text, StyleSheet } from "react-native";

export default function MessageArea({ data }) {
  const isSentByCurrentUser = data.userId === 1;

  return (
    <View
      style={[
        styles.container,
        isSentByCurrentUser ? styles.rightContainer : styles.leftContainer,
      ]}
    >
      <Text style={styles.text}>{data.content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    padding: 12,
    maxWidth: "80%",
  },
  text: {
    color: "white",
  },
  rightContainer: {
    alignSelf: "flex-end",
    backgroundColor: "#005D4B",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  leftContainer: {
    alignSelf: "flex-start",
    backgroundColor: "#1E2B31",
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
