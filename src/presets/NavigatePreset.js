import React, {useEffect, useRef, useState} from 'react';
import {useSelector} from 'react-redux';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Loading from '../components/Loading';
import IntroScreen from '../screens/IntroScreen';
import InitScreen from '../screens/InitScreen';
import MainScreen from '../screens/MainScreen';
import DetailScreen from '../screens/DetailScreen';
import Error from '../components/Error';
import BookMarkScreen from '../screens/BookMarkScreen';
import TOSScreen from '../screens/TOSScreen';
import PrivacyPolicyScreen from '../screens/PrivacyPolicyScreen';
import {AppState, StyleSheet} from 'react-native';
import MypageScreen from '../screens/MypageScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();

const styles = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#ffffff',
  },
};

const NavigatePreset = () => {
  const {loading, error, isInitialized} = useSelector(({loading, setting}) => ({
    loading: loading['setting/INITIALIZE'],
    error: setting.error,
    isInitialized: setting.isInitialized,
  }));

  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        console.log('App has come to the foreground!');
      }

      appState.current = nextAppState;
      setAppStateVisible(appState.current);
      console.log('AppState', appState.current);
    });

    return () => {
      console.log('unmount');
      subscription.remove();
    };
  }, []);

  return loading ? (
    <Loading />
  ) : error ? (
    <Error />
  ) : (
    <NavigationContainer theme={styles}>
      <Stack.Navigator
        initialRouteName={isInitialized ? 'MainScreen' : 'IntroScreen'}>
        <Stack.Screen
          name="IntroScreen"
          component={IntroScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="InitSettingScreen"
          component={InitScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="BookMarkScreen" component={BookMarkScreen} />
        <Stack.Screen
          name="TOSScreen"
          component={TOSScreen}
          options={{title: '서비스 이용약관'}}
        />
        <Stack.Screen
          name="PrivacyPolicyScreen"
          component={PrivacyPolicyScreen}
          options={{title: '개인정보 처리방침'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigatePreset;
