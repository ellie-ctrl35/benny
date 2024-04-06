import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
} from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

export default function ChatScreen() {
  return (
    <KeyboardAvoidingView style={styles.key}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Chat with AI Bot</Text>
        </View>

        <View style={styles.chatBubble}>
          <Text style={styles.chatBubbleText}>
            Describe and show me the perfect vacation spot on an island in the
            ocean
          </Text>
        </View>

        <View style={styles.inputContainer}>
          <AntDesign
            name="paperclip"
            size={24}
            color="white"
            style={{ marginLeft: "2%" }}
          />
          <TextInput
            placeholder="Type your message..."
            placeholderTextColor="#888"
            style={styles.input}
          />
          <TouchableOpacity style={styles.sendButton}>
            <FontAwesome name="send" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a", // Assuming a dark theme
    justifyContent: "space-between",
  },
  key: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  headerTitle: {
    color: "white",
    fontSize: 20,
  },
  chatBubble: {
    backgroundColor: "#333", // Dark chat bubble color
    borderRadius: 20,
    padding: 16,
    margin: 16,
    maxWidth: "80%",
    alignSelf: "flex-start",
  },
  chatBubbleText: {
    color: "white",
  },
  chatImage: {
    width: "90%",
    height: 200,
    alignSelf: "center",
    marginVertical: 10,
    borderRadius: 10, // adjust as per your design
  },
  chatText: {
    color: "white",
    margin: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
    backgroundColor: "#222729",
    borderRadius: "5%",
  },
  input: {
    flex: 1,
    height: 50,
    color: "white",
    borderRadius: 25,
    paddingHorizontal: 16,
    marginRight: 8,
  },
  sendButton: {
    borderRadius: 25,
    padding: 12,
  },
});
