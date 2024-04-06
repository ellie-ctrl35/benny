import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Animated,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Swipeable } from "react-native-gesture-handler";

const { width } = Dimensions.get("window");

const ReminderScreen = () => {
  const [reminders, setReminders] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchReminders = async () => {
      try {
        const storedReminders = await AsyncStorage.getItem("reminders");
        if (storedReminders) {
          setReminders(JSON.parse(storedReminders));
        }
      } catch (error) {
        console.error("Error retrieving reminders:", error);
      }
    };

    fetchReminders();
  }, []);

  const navToAdd = () => {
    navigation.navigate("AddReminder");
  };

  const renderItem = ({ item }) => {
    const reminderTime = new Date(item.time);
    const formattedTime = reminderTime.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    return (
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableOpacity
          style={styles.item}
          onPress={() => console.log("Pressed")}
        >
          <View style={styles.itemLeft}>
            <View style={styles.square}></View>
            <View>
              <Text style={styles.itemTitle}>{item.description}</Text>
              <Text style={styles.itemText}>
                {formattedTime} - {item.frequency}
              </Text>
            </View>
          </View>
          <View style={styles.circular}></View>
        </TouchableOpacity>
      </Swipeable>
    );
  };

  const renderRightActions = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [-width, 0],
      outputRange: [-60, 0],
      extrapolate: "clamp",
    });

    return (
      <View style={styles.rightActions}>
        <Animated.View style={[styles.actionButton, { transform: [{ translateX: trans }] }]}>
          <TouchableOpacity onPress={() => console.log("Delete")}>
            <Text style={styles.actionText}>Delete</Text>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View style={[styles.actionButton, { transform: [{ translateX: trans }] }]}>
          <TouchableOpacity onPress={() => console.log("Edit")}>
            <Text style={styles.actionText}>Edit</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.title}>Reminders</Text>
        <TouchableOpacity onPress={navToAdd} style={styles.addBtn}></TouchableOpacity>
      </View>

      <FlatList
        data={reminders}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191919",
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  item: {
    backgroundColor: "#D1FAE5",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 5,
    height: 100,
    marginBottom: 10,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    maxWidth: "80%",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#55BCF6",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  itemText: {
    fontSize: 14,
    color: "#000",
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: "#55BCF6",
    borderWidth: 2,
    borderRadius: 5,
  },
  addBtn: {
    backgroundColor: "dodgerblue",
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  rightActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  actionButton: {
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
  actionText: {
    color: "white",
    fontSize: 16,
  },
});

export default ReminderScreen;
