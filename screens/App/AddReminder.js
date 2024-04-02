import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Ionicons } from '@expo/vector-icons'; // Ensure you have expo/vector-icons installed

const AddReminder = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add New Reminder</Text>
      
      {/* Date Picker */}
      <TouchableOpacity onPress={() => showMode('date')} style={styles.inputField}>
        <Ionicons name="calendar" size={24} color="black" />
        <Text style={styles.inputText}>{date.toLocaleDateString()}</Text>
        <Ionicons name="chevron-down" size={24} color="black" />
      </TouchableOpacity>
      
      {/* Time Picker */}
      <TouchableOpacity onPress={() => showMode('time')} style={styles.inputField}>
        <Ionicons name="time" size={24} color="black" />
        <Text style={styles.inputText}>Select Time</Text>
        <Ionicons name="chevron-down" size={24} color="black" />
      </TouchableOpacity>
      
      {/* Priority Selector */}
      <TouchableOpacity style={styles.inputField}>
        <Ionicons name="flag" size={24} color="black" />
        <Text style={styles.inputText}>Priority</Text>
        <Ionicons name="chevron-down" size={24} color="black" />
      </TouchableOpacity>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      
      <TextInput style={styles.description} placeholder="Add Description..." />
      
      {/* Hashtags */}
      <View style={styles.hashtags}>
        <Text style={styles.hashtagText}>#Application</Text>
        <Text style={styles.hashtagText}>#Unidef</Text>
        <Text style={styles.hashtagText}>#CoollectionPage</Text>
      </View>
      
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Add Hashtags</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Assuming dark mode from screenshot
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  inputField: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f55', // Replace with actual color from your theme
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 15,
  },
  inputText: {
    color: '#fff',
  },
  description: {
    color: '#fff',
    borderColor: '#555', // Lighter grey for border
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  hashtags: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 15,
  },
  hashtagText: {
    color: '#fff',
    backgroundColor: '#333', // Darker grey for hashtag background
    borderRadius: 15,
    padding: 8,
  },
  addButton: {
    backgroundColor: '#f55', // Replace with actual color from your theme
    padding: 15,
    borderRadius: 10,
  },
  addButtonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default AddReminder;
