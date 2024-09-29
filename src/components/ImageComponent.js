import {StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import {colors} from '../constans';
import FastImage from 'react-native-fast-image';

export const ImageComponent = memo(({path, author}) => {
  return (
    <View style={S.ITEM_CTR}>
      <FastImage
        source={{
          uri: path,
          priority: FastImage.priority.low,
        }}
        style={S.IMAGE}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={S.ABSOLUTE}>
        <Text style={S.DESCRIPTION}> {author}</Text>
      </View>
    </View>
  );
});

const S = StyleSheet.create({
  ITEM_CTR: {
    backgroundColor: colors.white,
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 8,
  },
  IMAGE: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 8,
  },
  ABSOLUTE: {
    backgroundColor: colors.gray,
    padding: 16,
    opacity: 0.8,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  DESCRIPTION: {
    fontSize: 14,
    color: colors.white,
  },
});
