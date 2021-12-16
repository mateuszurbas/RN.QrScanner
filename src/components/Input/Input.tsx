import React from 'react';
import { Control, Controller, RegisterOptions } from 'react-hook-form';
import {
  Keyboard,
  StyleProp,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';

import { AppText } from '@components/AppText';
import { Colors } from '@theme/colors';

import styles from './styles';

type Props = TextInputProps & {
  control: Control<any>;
  name: string;
  label: string;
  rules: RegisterOptions;
  error?: string | null;
  style?: StyleProp<ViewStyle>;
};

const Input = ({
  control,
  name,
  label,
  placeholder,
  error,
  style,
  rules,
  multiline = false,
  numberOfLines = 1,
  ...other
}: Props) => {
  return (
    <View style={style}>
      <AppText style={styles.label}>{label}</AppText>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { onChange, onBlur, value } }) => (
          <View
            style={[
              styles.inputWrapper,
              error ? styles.errorWrapper : undefined,
            ]}>
            <TextInput
              placeholder={placeholder}
              placeholderTextColor={Colors.gray}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value as string | undefined}
              autoCorrect={false}
              onSubmitEditing={Keyboard.dismiss}
              style={styles.input}
              autoCapitalize="none"
              multiline={multiline}
              numberOfLines={numberOfLines}
              {...other}
            />
          </View>
        )}
      />
      {error && <AppText style={styles.errorText}>{error}</AppText>}
    </View>
  );
};

export default Input;
