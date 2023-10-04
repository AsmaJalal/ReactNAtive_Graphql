import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import SubmitScreen from '../Screens/SubmitScreen'; 


const Tab = createMaterialTopTabNavigator();

// Define the CheckInsScreen component once
function CheckInsScreen() {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.card}>
        <Image source={{ uri: item.imageUrl }} style={styles.userImage} />
        <View style={styles.userInfo}>
          <Text style={styles.username}>{item.username}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
        <Text style={styles.comments}>{item.comments}</Text>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={checkInsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default function Checkins() {
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

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    margin: 10,
    padding: 10,
    borderRadius: 5,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userInfo: {
    flex: 1,
    marginLeft: 10,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  time: {
    color: 'gray',
  },
  comments: {
    marginTop: 5,
  },
});
