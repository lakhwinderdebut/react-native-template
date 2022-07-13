import 'react-native-gesture-handler';
import React from 'react';
import Store from './src/store/Store';
import {Provider} from 'react-redux';
import RootNavigator from './src/navigation';
import {View} from 'react-native';

const App = () => {
  return (
    <Provider store={Store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;
