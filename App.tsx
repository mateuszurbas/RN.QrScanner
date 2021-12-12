import { useFonts, Roboto_500Medium } from '@expo-google-fonts/roboto';
import React from 'react';

import { StartScreen } from '@/screens/StartScreen';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_500Medium,
  });

  return fontsLoaded ? <StartScreen /> : null;
}
