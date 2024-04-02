import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView,SafeAreaView } from 'react-native';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Premium Plan</Text>
        <Text style={styles.headerSubtitle}>Harness the full power of AI with a Premium Plan</Text>
        <TouchableOpacity style={styles.upgradeButton}>
            
          <Text style={styles.upgradeButtonText}>Upgrade now</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.featureContainer}>
        <View style={styles.featureBox}>
        <MaterialCommunityIcons name="robot-angry" size={24} color="#4b9eb2" />
          <Text style={styles.featureText}>Ask our AI Assistant about anuthing Health related</Text>
        </View>
        <View style={styles.featureBox}>
        <MaterialCommunityIcons name="alarm" size={24} color="#4b9eb2" />
          <Text style={styles.featureText}>Set Reminders for your Medicine </Text>
        </View>
      </View>
      <Text style={styles.historyTitle}>History</Text>
      <ScrollView style={styles.historyContainer}>
        {/* Map your history items here */}
      </ScrollView>
      {/* Your tab navigator goes here, will be addressed in next step */}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191919', // Assuming the background is black
  },
  header: {
    padding: 20,
    backgroundColor: '#5ad7ff', // Dark background for header
    borderRadius: 20,
    marginTop:'2%',
    marginHorizontal:'3%',
  },
  headerTitle: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
  },
  headerSubtitle: {
    color: '#000',
    fontSize: 16,
    marginBottom: 10,
  },
  upgradeButton: {
    backgroundColor: '#000', // Example green color
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  upgradeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  featureContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginTop:'3%'
  },
  featureBox: {
    backgroundColor: '#222729', // Dark boxes for features
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '45%',
  },
  featureText: {
    color: '#fff',
    marginTop: 5,
  },
  historyTitle: {
    color: '#fff',
    padding: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  historyContainer: {
    // styles for history container
  },
  // ... other styles
});
