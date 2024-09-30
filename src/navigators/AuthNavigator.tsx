import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthScreen, LoginScreen} from '../screens';

const {Navigator, Screen} = createStackNavigator();

export const AuthNavigator = () => {
  return (
    <Navigator
      initialRouteName="LoginScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="LoginScreen" component={LoginScreen} />
      <Screen name="AuthScreen" component={AuthScreen} />
    </Navigator>
  );
};
