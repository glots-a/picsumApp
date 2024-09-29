import React, {useEffect} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {HomeScreen, UserScreen} from '../screens';
import {HomeSvg} from '../assets/HomeSvg';
import {PersonSvg} from '../assets';
import {useDispatch} from 'react-redux';
import {avatarApi} from '../redux/api/avatarApi';
import {useTheme} from '@react-navigation/native';

const {Navigator, Screen} = createMaterialTopTabNavigator();

const renderTabBarIcon = (focused, instance) => {
  const options = {
    home: <HomeSvg focused={focused} />,
    person: <PersonSvg focused={focused} />,
  };
  return options[instance];
};

export const HomeNavigator = () => {
  const dispatch = useDispatch();
  const {colors} = useTheme();

  /* eslint-disable */
  useEffect(() => {
    dispatch(avatarApi.endpoints.getAvatar.initiate());
  }, []);
  /* eslint-disable */

  return (
    <Navigator
      screenOptions={{
        lazy: true,
        tabBarIndicatorStyle: {backgroundColor: colors.indicator, height: 2},
        tabBarShowIcon: true,
        tabBarStyle: {backgroundColor: colors.gray},
        tabBarIconStyle: {
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarItemStyle: {flexDirection: 'row', alignItems: 'center'},
      }}>
      <Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'FEEDS',
          tabBarIcon: ({focused}) => renderTabBarIcon(focused, 'home'),
        }}
      />
      <Screen
        name="UserScreen"
        component={UserScreen}
        options={{
          title: 'PROFILE',
          tabBarIcon: ({focused}) => renderTabBarIcon(focused, 'person'),
        }}
      />
    </Navigator>
  );
};
