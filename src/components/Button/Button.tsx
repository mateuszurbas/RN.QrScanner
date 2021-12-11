import React, { memo, ReactNode } from 'react';
import { StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native';

import styles from './styles';
import { AppText } from '../AppText';

export enum ButtonVariants {
  primary = 'primary',
  secondary = 'secondary',
}

type Props = {
  label: string;
  onPress: VoidFunction;
  variant?: ButtonVariants;
  icon?: ReactNode;
  disabled?: boolean;
  style?: StyleProp<ViewStyle> | StyleProp<ViewStyle>[];
  textStyle?: StyleProp<ViewStyle> | StyleProp<ViewStyle>[];
};

const Button = ({
  label,
  onPress,
  variant = ButtonVariants.primary,
  icon,
  disabled,
  style,
  textStyle,
}: Props) => {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityHint={label}
      style={[
        styles.container,
        styles[variant],
        disabled && styles.disabled,
        style,
      ]}
      disabled={disabled}
      onPress={onPress}>
      {icon && <View style={styles.icon}>{icon}</View>}
      <AppText style={[styles.text, styles[`${variant}Text`], textStyle]}>
        {label}
      </AppText>
    </TouchableOpacity>
  );
};

export default memo(Button);
