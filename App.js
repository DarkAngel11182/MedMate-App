//import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomePage from './screens/WelcomePage';
import LoginScreen from './screens/Login';
import CreateAccountScreen from './screens/CreateAccount';
import ForgotAccountScreen from './screens/ForgotAccount';
import PatientSideMain from './screens/PatientSideMain';
import UpcomingEventsList from './screens/UpcomingEvents';
//import { StyleSheet, View, Text, Pressable, Image } from 'react-native';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomePage} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
        <Stack.Screen name="ForgotAccount" component={ForgotAccountScreen} />
        <Stack.Screen name="PatientSideMain" component={PatientSideMain} />
	<Stack.Screen name="UpcomingEventsList" component={UpcomingEventsList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
