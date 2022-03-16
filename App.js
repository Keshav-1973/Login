//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import SignUpComp from './Screens/SignUp';
import Verification from './Screens/Verification';
import IntroComp from './Screens/Slider';
import HomeScreen from './Screens/Home';
import SignInComp from './Screens/SignIn';

// create a component
const App = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="IntroComp" component={IntroComp} />
        <Stack.Screen name="SignUpComp" component={SignUpComp} />
        <Stack.Screen name="SignInComp" component={SignInComp} />

        <Stack.Screen name="Verification" component={Verification} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default App;
