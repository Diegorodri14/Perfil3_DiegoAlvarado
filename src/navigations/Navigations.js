import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import EstudiantesScreen from '../screens/EstudiantesScreen';
import DragonBallScreen from '../screens/DragonBallScreen';
import FakeStoreScreen from '../screens/FakeStoreScreen';
import RickAndMortyScreen from '../screens/RickAndMortyScreen';
import ApiScreen from '../screens/ApiScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#6200ee',
        tabBarInactiveTintColor: '#666',
      }}
    >
      <Tab.Screen 
        name="Estudiante" 
        component={EstudiantesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen 
        name="DragonBall" 
        component={DragonBallScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="flame-outline" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen 
        name="FakeStore" 
        component={FakeStoreScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart-outline" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen 
        name="Rick&Morty" 
        component={RickAndMortyScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="planet-outline" color={color} size={size} />
          )
        }}
      />

    </Tab.Navigator>
  );
}

export default function Navigations() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}