import { useFonts, Roboto_500Medium } from '@expo-google-fonts/roboto';
import React from 'react';

import Router from '@/navigation/Router';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_500Medium,
  });

  return fontsLoaded ? <Router /> : null;
}
