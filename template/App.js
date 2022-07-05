/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from './src/styling/colors';

const App = () => {
  return (
    <View style={styles.sectionContainer}>
      // EDIT AS YOU LIKE
      <Text style={styles.sectionTitle}>Splash Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: colors.backgroundPrimary,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default App;
