// src/Screens/Submit.js
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Header from '../Components/Header';
import TextInput from '../Components/TextInput';
import SubmitButton from '../Components/Button';
import CheckInsScreen from '../Screens/CheckInsScreen';

const Tab = createMaterialTopTabNavigator();

function SubmitScreen() {
  const [name, setName] = useState('');
  const [comments, setComments] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleAdd = () => {
    // Implement your logic to add the data (e.g., make an API call or store in state)
    console.log('Name:', name);
    console.log('Comments:', comments);
    console.log('Image URL:', imageUrl);

    // Clear input fields
    setName('');
    setComments('');
    setImageUrl('');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Header title="Checkins" />
      <Text>Submit Screen</Text>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        placeholder="Comments"
        value={comments}
        onChangeText={(text) => setComments(text)}
      />
      <TextInput
        placeholder="Image URL"
        value={imageUrl}
        onChangeText={(text) => setImageUrl(text)}
      />
      <SubmitButton title="Add" onPress={handleAdd} />
    </View>
  );
}

function CheckInsScreen() {
  // Implement your logic to display a list of check-ins here
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Header title="Checkins" />
      <Text>Check-ins Screen</Text>
      {/* Display the list of check-ins */}
    </View>
  );
}

export default function Submit() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        tabBarOptions={{
          labelStyle: { fontSize: 16 },
          style: { backgroundColor: 'lightblue' },
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
          indicatorStyle: { backgroundColor: 'blue' },
        }}
      >
        <Tab.Screen name="Submit" component={SubmitScreen} />
        <Tab.Screen name="Check-ins" component={CheckInsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
