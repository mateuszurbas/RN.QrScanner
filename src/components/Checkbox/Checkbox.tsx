import { Ionicons } from '@expo/vector-icons';
import React, { memo } from 'react';
import { TouchableOpacity, View, ViewStyle } from 'react-native';

import { Colors } from '@theme/colors';

import { AppText } from '../AppText';

import styles from './styles';

export enum CheckboxVariants {
  pink,
  gray,
}

export type Props = {
  checked: boolean;
  onChange: (value: any) => void;
  label?: string;
  style?: ViewStyle;
  error?: string;
};

const Checkbox = ({ checked, label, onChange, style, error }: Props) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => onChange(!checked)}
        style={[styles.checkboxContainer, style]}>
        <View style={styles.box}>
          {checked ? (
            <Ionicons name="checkmark" size={16} color={Colors.black} />
          ) : null}
        </View>
        {label ? <AppText style={styles.label}>{label}</AppText> : null}
      </TouchableOpacity>
      {error && <AppText style={styles.errorText}>{error}</AppText>}
    </View>
  );
};

export default memo(Checkbox);
