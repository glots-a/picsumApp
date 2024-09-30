import {View, StyleSheet} from 'react-native';
import React from 'react';
import {Container, CustomButton, UserComponent} from '../components';
import {useAppSelector, useAppDispatch} from '../redux/hooks/redux-hooks';
import {removeToken, swithcThemeMode} from '../redux/userSlice';

export const UserScreen = () => {
  const dispatch = useAppDispatch();
  const isDarkMode = useAppSelector(state => state.user.isDarkTheme);

  const handleRemoveToken = () => {
    dispatch(removeToken());
  };

  const handleThemeChange = () => {
    dispatch(swithcThemeMode());
  };

  return (
    <Container>
      <View style={S.CTR}>
        <UserComponent />

        <View style={S.BUTTONS_CTR}>
          <CustomButton
            title={`Change theme to ${isDarkMode ? 'ligth' : 'dark'}`}
            onHandle={handleThemeChange}
          />
          <CustomButton title={'Log Out'} onHandle={handleRemoveToken} />
        </View>
      </View>
    </Container>
  );
};

const S = StyleSheet.create({
  CTR: {
    paddingVertical: 24,
    justifyContent: 'space-between',
    flex: 1,
  },

  BUTTONS_CTR: {
    rowGap: 8,
  },
});
