import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';

import React from 'react';
import {HomeNavigator} from './HomeNavigator';
import {AuthNavigator} from './AuthNavigator';

const {Navigator, Screen} = createStackNavigator();

export const MainNavigator = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      {true ? (
        <Screen name="HomeNavigator" component={HomeNavigator} />
      ) : (
        <Screen name="AuthNavigator" component={AuthNavigator} />
      )}
    </Navigator>
  );
};
