import {
  Text,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Container, CustomButton, CustomInput} from '../components';
import {useForm} from 'react-hook-form';
import {EMAIL_REGEX} from '../constans';
import {PASSWORD_REDEX} from '../constans/regex';
import {StackNavigationProp} from '@react-navigation/stack';

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

  const onSubmit = (data: FormData) => console.log(data);

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
