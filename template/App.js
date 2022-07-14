import 'react-native-gesture-handler';
import React from 'react';
import Store from './src/store/Store';
import {Provider} from 'react-redux';
import RootNavigator from './src/navigation';
import {I18nextProvider} from 'react-i18next';
import i18next from 'i18next';
import resources from './src/i18n/index';

const App = () => {
  // Multilingual support
  i18next.init({
    interpolation: {
      escapeValue: false,
    },
    lng: 'en',
    resources: resources,
  });
  return (
    <Provider store={Store}>
      <I18nextProvider i18n={i18next}>
        <RootNavigator />
      </I18nextProvider>
    </Provider>
  );
};

export default App;
