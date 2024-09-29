import {View, StyleSheet} from 'react-native';
import React from 'react';
import {Container, CustomButton, UserComponent} from '../components';
import {colors} from '../constans';
import {useDispatch, useSelector} from 'react-redux';
import {removeToken, swithcThemeMode} from '../redux/userSlice';

export const UserScreen = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector(state => state.user.isDarkTheme);

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
  CARD: {
    backgroundColor: colors.gray,
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
  INFO: {},
  DATA: {
    fontSize: 14,
    color: colors.white,
    lineHeight: 19,
  },
  BUTTONS_CTR: {
    rowGap: 8,
  },
  BUTTON: {
    backgroundColor: colors.button_green,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  BUTTON_NAME: {
    fontWeight: '600',
    color: colors.white,
  },
});
