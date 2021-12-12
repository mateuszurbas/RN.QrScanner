import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { memo } from 'react';

import { MainStackRoutes } from '@/navigation/routes';
import { StartScreen } from '@/screens/StartScreen';

export type MainStackParamList = {
  [MainStackRoutes.Start]: undefined;
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
    </Navigator>
  );
};

export default memo(MainStack);
