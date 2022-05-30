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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigatePreset;
