import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Menu(props) {
  const deleteAllMessages = async () => {
    try {
      const jsonValue = JSON.stringify([]);
      await AsyncStorage.setItem('messages', jsonValue);
    } catch (error) {
      console.error('Error storing data:', error);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.menuBar}>
        <Image style={styles.menuIcon} source={require("../assets/wewe.jpg")} />
        <Text style={[styles.menuName, { flex: 1 }]}>{props.name}</Text>
        <View style={{ flexDirection: 'row-reverse' }}>
          <TouchableOpacity onPress={deleteAllMessages}>
            <Image style={styles.btnImg} source={require("../assets/delete.png")} />
          </TouchableOpacity>
        </View>
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
  btnImg: {
    height: 25,
    width: 25,
    margin: 14,
  },
});
