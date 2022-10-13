import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BrightScreen from './src/screens/BrightScreen';
import DarkScreen from './src/screens/DarkScreen';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown : false }}>
        <Stack.Screen name="Bright" component={BrightScreen} />
        <Stack.Screen name="Dark" component={DarkScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}