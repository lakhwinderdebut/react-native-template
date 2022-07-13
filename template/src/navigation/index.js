import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import AuthNavigator from './auth-navigator';
import AppNavigator from './app-navigator';

const RootNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  return (
    <NavigationContainer>
      {/* Conditional stack navigator rendering based on login state */}
      {isLoggedIn ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default RootNavigator;
