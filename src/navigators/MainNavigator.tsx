import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';

import React from 'react';
import {HomeNavigator} from './HomeNavigator';
import {AuthNavigator} from './AuthNavigator';
import {Wrapper} from '../components';
import {useAppSelector} from '../redux/hooks/redux-hooks';

const {Navigator, Screen} = createStackNavigator();

export const MainNavigator = () => {
  const token = useAppSelector(state => state.user.token);

  return (
    <Wrapper>
      <Navigator screenOptions={{headerShown: false}}>
        {token ? (
          <Screen name="HomeNavigator" component={HomeNavigator} />
        ) : (
          <Screen name="AuthNavigator" component={AuthNavigator} />
        )}
      </Navigator>
    </Wrapper>
  );
};
