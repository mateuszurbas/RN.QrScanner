import React, { memo, ReactNode } from 'react';
import { Text, StyleProp, TextStyle } from 'react-native';

import styles from './styles';

type Props = {
  style?: StyleProp<TextStyle>;
  children: ReactNode;
};

const AppText = function ({ children, style }: Props) {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default memo(AppText);
