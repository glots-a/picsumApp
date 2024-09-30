import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {DarkTheme, LightTheme} from '../theme';
import {MainNavigator} from './MainNavigator';
import {useAppSelector} from '../redux/hooks/redux-hooks';

export const Theme = () => {
  const isDarkMode = useAppSelector(state => state.user.isDarkTheme);

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={isDarkMode ? DarkTheme : LightTheme}>
        <MainNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
