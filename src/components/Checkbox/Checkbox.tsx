import { Ionicons } from '@expo/vector-icons';
import React, { memo } from 'react';
import { Control, Controller, RegisterOptions } from 'react-hook-form';
import { TouchableOpacity, View, ViewStyle } from 'react-native';

import { Colors } from '@theme/colors';

import { AppText } from '../AppText';

import styles from './styles';

export type Props = {
  control: Control<any>;
  name: string;
  label?: string;
  style?: ViewStyle;
  error?: string;
  rules: RegisterOptions;
};

const Checkbox = ({ control, label, name, rules, style, error }: Props) => {
  return (
    <View style={style}>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { onChange, value } }) => (
          <TouchableOpacity
            onPress={() => onChange(!value)}
            style={[styles.checkboxContainer, style]}>
            <View style={styles.box}>
              {value ? (
                <Ionicons name="checkmark" size={16} color={Colors.black} />
              ) : null}
            </View>
            {label ? <AppText style={styles.label}>{label}</AppText> : null}
          </TouchableOpacity>
        )}
      />
      {error && <AppText style={styles.errorText}>{error}</AppText>}
    </View>
  );
};

export default memo(Checkbox);
