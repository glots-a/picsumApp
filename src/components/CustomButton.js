import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';

export const CustomButton = ({title, onHandle}) => {
  const {colors} = useTheme();
  return (
    <TouchableOpacity style={S.BUTTON(colors)} onPress={onHandle}>
      <Text style={S.BUTTON_NAME(colors)}>{title}</Text>
    </TouchableOpacity>
  );
};

const S = StyleSheet.create({
  BUTTON: colors => ({
    backgroundColor: colors.button_green,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  }),
  BUTTON_NAME: colors => ({
    fontWeight: '600',
    color: colors.white,
  }),
});
