import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity,SafeAreaView } from 'react-native';

const ReminderScreen = () => {
  const reminders = [
    { key: '1', title: 'o Home Work', time: '8 am - 9:30 am' },
    { key: '2', title: 'Mke Cookies', time: '9:45 am - 11:00 am' },
    { key: '3', title: 'Math Class', time: '1:00 pm - 3:00 pm' },
    { key: '4', title: 'Do Home Wok', time: '8 am - 9:30 am' },
    { key: '5', title: 'Make Cokies', time: '9:45 am - 11:00 am' },
    { key: '6', title: 'Math lass', time: '1:00 pm - 3:00 pm' },
    // ... more reminders
  ];

  const renderItem = ({ item, index }) => (
    <TouchableOpacity style={[styles.item, { backgroundColor: index % 2 === 0 ? '#D1FAE5' : '#BAE6FD' }]}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{item.title}</Text>
      </View>
      <View style={styles.circular}></View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.TopContainer}>
       <Text style={styles.title}>Reminders</Text>
       <TouchableOpacity>

       </TouchableOpacity>
      </View>
      
      <FlatList
        data={reminders}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191919',
  },
  TopContainer:{
   width:"90%",
   height:"10%",
   marginTop:"2%",
   alignSelf:"center",
   alignItems:"space-evenly",
   justifyContent:"center"
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 10,
    color:"#fff"
  },
  item: {
    backgroundColor: '#D1FAE5',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop:"1%",
    height:"65%"
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default ReminderScreen;
