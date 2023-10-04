// src/navigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Submit from '../Screens/SubmitScreen';
import Checkins from '../Screens/CheckInsScreen';

const Tab = createMaterialTopTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          labelStyle: { fontSize: 16 },
          style: { backgroundColor: 'lightblue' },
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
          indicatorStyle: { backgroundColor: 'blue' },
        }}
      >
        <Tab.Screen name="Submit" component={Submit} />
        <Tab.Screen name="Check-ins" component={Checkins} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
