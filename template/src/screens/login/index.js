import React from 'react';
import {SafeAreaView, Text, View, TouchableHighlight} from 'react-native';

const LoginScreen = ({navigation}) => {
  debugger;
  return (
    <SafeAreaView
      style={{
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        height: '100%',
      }}>
      <Text>Screen: Login</Text>

      <TouchableHighlight onPress={() => navigation.navigate('Home')}>
        <Text>Go to home</Text>
      </TouchableHighlight>
    </SafeAreaView>
  );
};

export default LoginScreen;
