import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import MainStack from './MainStack';

const Router = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default Router;
