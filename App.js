import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, SafeAreaView, FlatList } from "react-native";
import Menu from "./components/menu.component";
import MessageArea from "./components/messageArea.component";
import MessageInput from "./components/messageInput.component";
import data from "./data/data.json";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <Menu name="vroumVroum" />
      <FlatList
        data={data}
        renderItem={({ item }) => <MessageArea data={item} />}
        keyExtractor={(item) => item.id}
      />

      <MessageInput userId={1} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#080B12",
  },
});
