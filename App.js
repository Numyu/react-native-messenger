import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, FlatList, Button } from "react-native";
import Menu from "./components/menu.component";
import MessageArea from "./components/messageArea.component";
import MessageInput from "./components/messageInput.component";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [messages, setMessages] = useState();

  const getLocalStorages = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('messages');
      if (jsonValue != null) {
        return JSON.parse(jsonValue);
      } else {
        return null;
      }
  } catch (error) {
      console.error('Error storing data:', error);
  }
  };

  useEffect(() => {
    getLocalStorages().then((data) => {
        if (data) {
          setMessages(data);
        }
    });
  }, [messages]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />

      <Menu name="BotChat" />

      <FlatList
        data={messages}
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
