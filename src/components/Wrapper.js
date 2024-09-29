import {StyleSheet} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '../constans';

export const Wrapper = ({children}) => {
  return <SafeAreaView style={S.WRAPPER}>{children}</SafeAreaView>;
};

const S = StyleSheet.create({
  WRAPPER: {
    paddingTop: 0,
    flex: 1,
  },
});
