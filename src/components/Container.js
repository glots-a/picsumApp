import {StyleSheet, View} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';

export const Container = ({children}) => {
  const {colors} = useTheme();
  return <View style={S.CTR(colors)}>{children}</View>;
};

const S = StyleSheet.create({
  CTR: colors => ({
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: colors.background_color,
  }),
});
