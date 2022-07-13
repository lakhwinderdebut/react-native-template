import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import AuthNavigator from './auth-navigator';
import AppNavigator from './app-navigator';
import {useSelector} from 'react-redux';
import {authToken} from '../store/reducers/AuthSlice';

const RootNavigator = () => {
  const userToken = useSelector(authToken);
  return (
    <NavigationContainer>
      {/* Conditional stack navigator rendering based on login state */}
      {userToken ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default RootNavigator;
