import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {useTheme} from '@react-navigation/native';
import {useGetAvatarQuery} from '../redux/api/avatarApi';

export const UserComponent = () => {
  const {colors} = useTheme();

  const {data, isLoading} = useGetAvatarQuery(undefined);

  if (isLoading) {
    return <ActivityIndicator size={24} color={colors.border} />;
  }

  const isData = Array.isArray(Object.keys(data));

  return isData ? (
    <View style={[S.CARD, {backgroundColor: colors.card}]}>
      <View style={S.AVATAR}>
        <FastImage
          source={{
            uri: data.avatar,
            priority: FastImage.priority.normal,
          }}
          style={S.ICON}
          resizeMode={FastImage.resizeMode.cover}
        />
      </View>
      <View>
        <Text style={[S.DATA, {color: colors.text}]}>
          Name: {`${data?.first_name} ${data?.last_name}`}
        </Text>
        <Text style={[S.DATA, {color: colors.text}]}>email: {data.email}</Text>
      </View>
    </View>
  ) : null;
};

const S = StyleSheet.create({
  CARD: {
    width: '100%',
    flexDirection: 'row',
    columnGap: 8,
    borderRadius: 8,
    padding: 8,
    justifyContent: 'flex-start',
    alignItems: 'center',
    opacity: 0.9,
  },
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
  DATA: {
    fontSize: 14,
    lineHeight: 19,
  },
});
