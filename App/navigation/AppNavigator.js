import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Importez vos écrans ici
import HomeScreen from './App/components/HomeScreen';
import QuizScreen from './App/components/QuizScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      {/* Définition de l' écrans  */}
      <Stack.Screen name="Home" components={HomeScreen} />
      <Stack.Screen name="Quiz" components={QuizScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
