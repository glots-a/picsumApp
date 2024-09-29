import React, {useEffect, useRef} from 'react';
import {View, Animated, Easing, StyleSheet} from 'react-native';
import {colors} from '../constans';

export const DotLoader = ({dotColor = colors.black}) => {
  const dot1Anim = useRef(new Animated.Value(0)).current;
  const dot2Anim = useRef(new Animated.Value(0)).current;
  const dot3Anim = useRef(new Animated.Value(0)).current;

  const animate = () => {
    Animated.parallel([
      Animated.timing(dot1Anim, {
        toValue: 5,
        duration: 500,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
      Animated.timing(dot2Anim, {
        toValue: -5,
        duration: 500,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
      Animated.timing(dot3Anim, {
        toValue: 5,
        duration: 500,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
    ]).start(() => {
      Animated.parallel([
        Animated.timing(dot1Anim, {
          toValue: -5,
          duration: 500,
          useNativeDriver: true,
          easing: Easing.linear,
        }),
        Animated.timing(dot2Anim, {
          toValue: 5,
          duration: 500,
          useNativeDriver: true,
          easing: Easing.linear,
        }),
        Animated.timing(dot3Anim, {
          toValue: -5,
          duration: 500,
          useNativeDriver: true,
          easing: Easing.linear,
        }),
      ]).start(() => animate());
    });
  };

  /* eslint-disable */
  useEffect(() => {
    animate();
  }, []);
  /* eslint-disable */

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={styles.container}>
        <Animated.View
          style={[
            {
              transform: [{translateY: dot1Anim}],
              width: 10,
              height: 10,
              backgroundColor: dotColor,
              borderRadius: 15,
            },
          ]}
        />
        <Animated.View
          style={[
            {
              transform: [{translateY: dot2Anim}],
              width: 10,
              height: 10,
              backgroundColor: dotColor,
              borderRadius: 5,
            },
          ]}
        />
        <Animated.View
          style={[
            {
              transform: [{translateY: dot3Anim}],
              width: 10,
              height: 10,
              backgroundColor: dotColor,
              borderRadius: 10 / 2,
            },
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 60,
  },
});
