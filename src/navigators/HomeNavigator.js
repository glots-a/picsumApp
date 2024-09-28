import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {HomeScreen, UserScreen} from '../screens';

const {Navigator, Screen} = createMaterialTopTabNavigator();

export const HomeNavigator = () => {
  return (
    <Navigator
      screenOptions={{
        lazy: true,
      }}>
      <Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{title: 'Home'}}
        initialParams={{screenIndex: 1}}
      />
      <Screen
        name="UserScreen"
        component={UserScreen}
        options={{title: 'User'}}
        initialParams={{screenIndex: 2}}
      />
    </Navigator>
  );
};
