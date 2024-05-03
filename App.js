import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './App/navigation/AppNavigator';
//import HomeScreen from './App/Components/HomeScreen';
//import QuizScreen from './App/Components/QuizScreen';

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;