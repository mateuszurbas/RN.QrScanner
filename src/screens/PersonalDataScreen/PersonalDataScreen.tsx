import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View } from 'react-native';

import { Checkbox } from '@/components/Checkbox';
import { Dict } from '@/constants/dictionary';

import styles from './styles';

const PersonalDataScreen = () => {
  const [termsAndConditions, setTermsAndConditions] = useState(false);
  return (
    <View style={styles.container}>
      <Checkbox
        checked={termsAndConditions}
        onChange={setTermsAndConditions}
        label={Dict.personalData}
        error="test"
      />
      <StatusBar style="auto" />
    </View>
  );
};

export default PersonalDataScreen;
