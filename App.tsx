import { Button, ButtonVariants } from '@/components/Button';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFonts, Roboto_500Medium } from '@expo-google-fonts/roboto';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_500Medium,
  });

  return fontsLoaded ? (
    <View style={styles.container}>
      <Button
        label="Zeskanuj"
        icon={<Ionicons name="md-barcode" size={19} color="white" />}
        onPress={() => {
          console.log('Zeskanuj');
        }}
        style={{ marginBottom: 40 }}
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
  ) : null;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
