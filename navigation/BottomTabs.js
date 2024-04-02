// BottomTabs.js
import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/App/HomeScreen';
import ChatScreen from '../screens/App/ChatScreen';
import ReminderScreen from '../screens/App/ReminderScreen';
import { HomeIcon, ChatBubbleBottomCenterIcon, BellAlertIcon } from 'react-native-heroicons/solid';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  const screenOptions = ({ route }) => ({
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyle: {
      height: '10%',
      elevation: 0,
      backgroundColor: '#191919',
      borderTopColor: 'transparent',
    },
    tabBarIcon: ({ focused, color, size }) => {
      let icon;
      let iconColor = focused ? '#5ad7ff' : '#4B5563';

      if (route.name === 'Home') {
        icon = <HomeIcon color={iconColor} size={size} />;
      } else if (route.name === 'Chat') {
        icon = <ChatBubbleBottomCenterIcon color={iconColor} size={size} />;
      } else if (route.name === 'Reminder') {
        icon = <BellAlertIcon color={iconColor} size={size} />;
      }

      return <View style={{ justifyContent: 'center', alignItems: 'center' }}>{icon}</View>;
    },
    tabBarActiveTintColor: '#FFFFFF',
    tabBarInactiveTintColor: '#4B5563',
  });

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Reminder" component={ReminderScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
