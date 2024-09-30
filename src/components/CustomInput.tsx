import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
// import {Controller} from 'react-hook-form';
import {
  Controller,
  Control,
  FieldValues,
  Path,
  RegisterOptions,
} from 'react-hook-form';

type CustomInputProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  rules?: Omit<
    RegisterOptions<T, Path<T>>,
    'setValueAs' | 'disabled' | 'valueAsNumber' | 'valueAsDate'
  >;
  placeholder?: string;
  secureTextEntry?: boolean;
};

export const CustomInput = <T extends FieldValues>({
  control,
  name,
  rules,
  placeholder,
  secureTextEntry,
}: CustomInputProps<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <View>
          <View style={S.CTR}>
            <TextInput
              value={value}
              placeholderTextColor={'#e7ebf1'}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              style={S.INPUT}
              secureTextEntry={secureTextEntry}
            />
          </View>
          {error && <Text style={S.TEXT}>{error.message || 'Error'}</Text>}
        </View>
      )}
    />
  );
};

const S = StyleSheet.create({
  CTR: {
    width: '100%',
    marginBottom: 12,
  },
  INPUT: {
    height: 40,
    color: '#fff',
  },
  TEXT: {
    color: 'red',
    alignSelf: 'stretch',
    fontSize: 12,
    position: 'absolute',
    bottom: -4,
  },
});
