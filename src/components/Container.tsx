import {StyleSheet, View} from 'react-native';
import React, {ReactNode} from 'react';
import {useTheme} from '@react-navigation/native';
import {ViewProps} from 'react-native-svg/lib/typescript/fabric/utils';

interface ContainerProps extends ViewProps {
  children: ReactNode;
}

export const Container: React.FC<ContainerProps> = ({children, ...props}) => {
  const {colors} = useTheme();
  return (
    <View style={[S.CTR, {backgroundColor: colors.background}]} {...props}>
      {children}
    </View>
  );
};

const S = StyleSheet.create({
  CTR: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
