import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {useSelector} from 'react-redux';
import {useTheme} from '@react-navigation/native';

export const UserComponent = () => {
  const {colors} = useTheme();

  const userInfo = useSelector(state => state.user.user);
  const isLoading = useSelector(state => state.user.isLoading);

  const avatar = userInfo?.avatar;
  const fullName = `${userInfo?.first_name} ${userInfo?.last_name}`;
  const email = userInfo?.email;

  return !isLoading ? (
    <View style={S.CARD(colors)}>
      <View style={S.AVATAR}>
        <FastImage
          source={{
            uri: avatar,
            priority: FastImage.priority.normal,
          }}
          style={S.ICON}
          resizeMode={FastImage.resizeMode.cover}
        />
      </View>
      <View style={S.INFO}>
        <Text style={S.DATA}>Name: {fullName}</Text>
        <Text style={S.DATA}>email: {email}</Text>
      </View>
    </View>
  ) : (
    <ActivityIndicator size={24} color={colors.button_green} />
  );
};

const S = StyleSheet.create({
  CARD: colors => ({
    backgroundColor: colors.gray,
    width: '100%',
    flexDirection: 'row',
    columnGap: 8,
    borderRadius: 8,
    padding: 8,
    justifyContent: 'flex-start',
    alignItems: 'center',
    opacity: 0.9,
  }),
  AVATAR: {
    width: 48,
    height: 48,
    borderRadius: 24,
    overflow: 'hidden',
  },
  ICON: {
    width: '100%',
    aspectRatio: 1,
  },
});
