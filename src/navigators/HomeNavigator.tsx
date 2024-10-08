import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {HomeScreen, UserScreen} from '../screens';
import {HomeSvg} from '../assets/HomeSvg';
import {PersonSvg} from '../assets';
import {useTheme} from '@react-navigation/native';

const {Navigator, Screen} = createMaterialTopTabNavigator();

const renderTabBarIcon = (focused: boolean, instance: string) => {
  const options: {[key: string]: React.JSX.Element} = {
    home: <HomeSvg focused={focused} />,
    person: <PersonSvg focused={focused} />,
  };
  return options[instance];
};

export const HomeNavigator = () => {
  const {colors} = useTheme();

  return (
    <Navigator
      screenOptions={{
        lazy: true,
        tabBarIndicatorStyle: {backgroundColor: colors.border, height: 2},
        tabBarShowIcon: true,
        tabBarStyle: {backgroundColor: colors.card},
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
