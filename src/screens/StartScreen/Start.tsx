import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';

import { Button, ButtonVariants } from '@/components/Button';

import styles from './styles';

const StartScreen = () => {
  return (
    <View style={styles.container}>
      <Button
        label="Zeskanuj"
        icon={<Ionicons name="md-barcode" size={19} color="white" />}
        onPress={() => {
          console.log('Zeskanuj');
        }}
        style={styles.separator}
      />
      <Button
        label="Twoje dane"
        variant={ButtonVariants.secondary}
        onPress={() => {
          console.error("Action can't be done");
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
};

export default StartScreen;
