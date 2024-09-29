import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {DarkTheme, LightTheme} from '../theme';
import {MainNavigator} from './MainNavigator';
import {useSelector} from 'react-redux';

export const Theme = () => {
  const isDarkMode = useSelector(state => state.user.isDarkTheme);

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={isDarkMode ? DarkTheme : LightTheme}>
        <MainNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
