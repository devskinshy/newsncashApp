import React from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
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

const Stack = createNativeStackNavigator();

const NavigatePreset = () => {
  const {loading, error, isInitialized} = useSelector(({loading, setting}) => ({
    loading: loading['setting/INITIALIZE'],
    error: setting.error,
    isInitialized: setting.isInitialized,
  }));

  return loading ? (
    <Loading />
  ) : error ? (
    <Error />
  ) : (
    <NavigationContainer>
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
        <Stack.Screen
          name="DetailScreen"
          component={DetailScreen}
          // options={{headerShown: false}}
        />
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
