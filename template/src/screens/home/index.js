import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {setSignOut} from '../../store/reducers/AuthSlice';
import {useTranslation} from 'react-i18next';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const {t} = useTranslation();

  const handleLogin = () => {
    dispatch(setSignOut());
  };
  return (
    <SafeAreaView
      style={{
        height: '100%',
      }}>
      <View style={styles.container}>
        <Text style={{marginBottom: 20, fontSize: 15}}>
          {t('t.homePage.title')}
        </Text>
        <TouchableOpacity onPress={handleLogin} style={styles.btn}>
          <Text style={styles.text}>{t('t.homePage.btnTitle')}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    height: '100%',
    width: '100%',
  },
  btn: {
    backgroundColor: 'blue',
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 10,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});
