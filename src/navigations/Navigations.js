import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EstudiantesScreen from '../screens/EstudiantesScreen';
import ApiScreen from '../screens/ApiScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Inicio" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Inicio" component={EstudiantesScreen} />
      <Stack.Screen name="Api" component={ApiScreen} />
    </Stack.Navigator>
  );
}