import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

export default function Menu(props) {
  return (
    <View style={styles.container}>
      <View style={styles.menuBar}>
        <Image style={styles.menuIcon} source={require("../assets/wewe.jpg")} />
        <Text style={styles.menuName}>{props.name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1E2B31",
    width: "100%",
    height: 100,
    position: "fixed",
    flexDirection: "column-reverse",
  },
  menuBar: {
    backgroundColor: "#1E2B31",
    height: 60,
    alignItems: "center",
    paddingLeft: 14,
    flexDirection: "row",
    gap: 10,
  },
  menuIcon: {
    height: 42,
    width: 42,
    borderRadius: 100,
  },
  menuName: {
    fontSize: 20,
    fontWeight: "medium",
    color: "white",
  },
});
