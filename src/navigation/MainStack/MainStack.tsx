import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { memo } from 'react';

import { Dict } from '@/constants/dictionary';
import { MainStackRoutes } from '@/navigation/routes';
import { PersonalDataScreen } from '@/screens/PersonalDataScreen';
import { StartScreen } from '@/screens/StartScreen';

export type MainStackParamList = {
  [key in MainStackRoutes]: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<MainStackParamList>();

const MainStack = () => {
  return (
    <Navigator initialRouteName={MainStackRoutes.Start}>
      <Screen
        name={MainStackRoutes.Start}
        component={StartScreen}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name={MainStackRoutes.PersonalData}
        component={PersonalDataScreen}
        options={{
          headerTitle: Dict.personalData,
        }}
      />
    </Navigator>
  );
};

export default memo(MainStack);
