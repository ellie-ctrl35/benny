import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Alert,Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Ionicons } from '@expo/vector-icons'; // Ensure you have expo/vector-icons installed

const AddReminder = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [frequency, setFrequency] = useState(null);
  const [showDate, setShowDate] = useState(false);
  const [showTime, setShowTime] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDate(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const handleTimeChange = (event, selectedTime) => {
    const currentTime = selectedTime || time;
    setShowTime(Platform.OS === 'ios');
    setTime(currentTime);
  };

  const showDatePicker = () => {
    setShowDate(true);
  };

  const showTimePicker = () => {
    setShowTime(true);
  };

  const frequencyOptions = ['Daily', 'Weekly', 'Monthly'];

  const selectFrequency = () => {
    Alert.alert(
      'Select Frequency',
      '',
      frequencyOptions.map((option) => ({
        text: option,
        onPress: () => setFrequency(option),
      })),
      { cancelable: true },
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Add New Reminder</Text>

      <TextInput style={styles.description} placeholder="Add Description..." />
      
      {/* Date Picker */}
      <TouchableOpacity onPress={showDatePicker} style={styles.inputField}>
        <Ionicons name="calendar" size={24} color="black" />
        <Text style={styles.inputText}>{date.toLocaleDateString()}</Text>
        <Ionicons name="chevron-down" size={24} color="black" />
      </TouchableOpacity>
      {showDate && (
        <DateTimePicker
          value={date}
          mode={'date'}
          display="default"
          onChange={handleDateChange}
          style={{ backgroundColor: '#fff',alignSelf:"center",justifyContent:"center",marginTop:"1%" }}
        />
      )}
      
      {/* Time Picker */}
      <TouchableOpacity onPress={showTimePicker} style={styles.inputField}>
        <Ionicons name="time" size={24} color="black" />
        <Text style={styles.inputText}>{time.toLocaleTimeString()}</Text>
        <Ionicons name="chevron-down" size={24} color="black" />
      </TouchableOpacity>
      {showTime && (
        <DateTimePicker
          value={time}
          mode={'time'}
          is24Hour={true}
          display="default"
          onChange={handleTimeChange}
          style={{ backgroundColor: '#fff',alignSelf:"center",justifyContent:"center",marginTop:"1%" }}
        />
      )}

      {/* Frequency Selector */}
      <TouchableOpacity onPress={selectFrequency} style={styles.inputField}>
        <Ionicons name="repeat" size={24} color="black" />
        <Text style={styles.inputText}>{frequency || 'Select Frequency'}</Text>
        <Ionicons name="chevron-down" size={24} color="black" />
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Add Hashtags</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191919', // Assuming dark mode from screenshot
    paddingTop: '5%',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    marginTop:'3%',
    marginLeft:"2%"
  },
  inputField: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#BAE6FD', // Replace with actual color from your theme
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop:'6%',
    height:"10%",
  },
  inputText: {
    color: '#000',
  },
  description: {
    color: '#fff',
    borderColor: '#555', // Lighter grey for border
    borderWidth: 1,
    borderRadius: 5,
    height:'9%',
    width:'90%',
    alignSelf:'center',
    padding: 10,
    marginTop:'5%',
  },
  addButton: {
    backgroundColor: '#BAE6FD', // Replace with actual color from your theme
    padding: 15,
    borderRadius: 10,
    width:"90%",
    height:"10%",
    alignSelf:"center",
    marginTop:"10%",
    justifyContent:"center ",
    alignItems:"center",
    display:"flex",
  },
  addButtonText: {
    textAlign: 'center',
    color: '#',
    fontWeight: 'bold',
  },
});

export default AddReminder;
