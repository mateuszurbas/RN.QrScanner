import React from 'react';
import { View, ScrollView } from 'react-native';

import { AppText } from '@/components/AppText';

import styles from './styles';

type Props = {
  data: string | undefined;
};

function BarCodeResult({ data }: Props) {
  return data ? (
    <View style={styles.scanResult}>
      <ScrollView>
        <AppText>{data}</AppText>
      </ScrollView>
    </View>
  ) : null;
}

export default BarCodeResult;
