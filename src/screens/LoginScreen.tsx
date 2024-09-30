import {
  Text,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Container, CustomButton, CustomInput} from '../components';
import {useForm} from 'react-hook-form';
import {EMAIL_REGEX} from '../constans';
import {PASSWORD_REDEX} from '../constans/regex';
import {StackNavigationProp} from '@react-navigation/stack';
import {useAppDispatch, useAppSelector} from '../redux/hooks/redux-hooks';
import {addToken} from '../redux/userSlice';
import {nanoid} from '@reduxjs/toolkit';

type AuthStackParamList = {
  LoginScreen: undefined;
  AuthScreen: undefined;
};

type LoginScreenNavigationProp = StackNavigationProp<
  AuthStackParamList,
  'LoginScreen'
>;

type FormData = {
  email: string;
  password: string;
};

export const LoginScreen = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const {control, handleSubmit} = useForm<FormData>();
  const dispathc = useAppDispatch();

  const userData = useAppSelector(state => state.user.userData);

  const onSubmit = (data: FormData) => {
    if (userData === null) {
      Alert.alert(
        'Error',
        'Email or password are incorrect or maybe you need to SignIn',
      );
      return;
    }
    const {email, password} = userData;

    const isEqual =
      email === data?.email.toLowerCase() && password === data.password;

    if (isEqual) {
      dispathc(addToken(nanoid()));
    } else {
      Alert.alert('Error', 'Email or password are incorrect');
    }
  };

  const handleNavigate = () => {
    navigation.navigate('AuthScreen');
  };

  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={300}
        style={S.CTR}>
        <CustomInput
          name="email"
          placeholder="Email"
          control={control}
          rules={{
            required: 'Email is required',
            pattern: {value: EMAIL_REGEX, message: 'Email is invalid'},
          }}
        />

        <CustomInput
          name="password"
          placeholder="Password"
          secureTextEntry
          control={control}
          rules={{
            required: 'Password is required',
            pattern: {
              value: PASSWORD_REDEX,
              message: 'Required uppercase letter, number and special symbol',
            },
            minLength: {
              value: 8,
              message: 'Password should be minimum 8 characters long',
            },
          }}
        />

        <CustomButton title={'Log in'} onHandle={handleSubmit(onSubmit)} />

        <TouchableOpacity onPress={handleNavigate}>
          <Text style={S.TEXT}>create a new profile!</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </Container>
  );
};

const S = StyleSheet.create({
  CTR: {
    flex: 1,
    paddingHorizontal: 32,
    justifyContent: 'center',

    rowGap: 8,
  },
  TEXT: {
    marginTop: 8,
    color: '#328da8',
    textAlign: 'center',
    fontWeight: '600',
  },
});
