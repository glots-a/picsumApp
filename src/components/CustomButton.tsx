import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';

type Props = {
  title: string;
  onHandle: () => void;
};

export const CustomButton: React.FC<Props> = ({title, onHandle}) => {
  const {colors} = useTheme();
  return (
    <TouchableOpacity
      style={[S.BUTTON, {backgroundColor: colors.border}]}
      onPress={onHandle}>
      <Text style={[S.BUTTON_NAME, {color: colors.text}]}>{title}</Text>
    </TouchableOpacity>
  );
};

const S = StyleSheet.create({
  BUTTON: {
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  BUTTON_NAME: {
    fontWeight: '600',
  },
});
