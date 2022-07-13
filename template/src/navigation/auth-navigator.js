import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/login/index';
import {AppScreens} from '../screens/Constants';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  debugger;
  return (
    <Stack.Navigator>
      <Stack.Screen name={AppScreens.Login} component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
