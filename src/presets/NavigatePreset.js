import React from 'react';
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
import {INITIALIZE} from '../redux/modules/config';

const Stack = createNativeStackNavigator();

const styles = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#ffffff',
  },
};

const NavigatePreset = () => {
  const {loading, init, error, isInitialized} = useSelector(
    ({loading, config}) => ({
      loading: loading[INITIALIZE],
      init: config.init,
      error: config.error,
      isInitialized: config.isInitialized,
    }),
  );

  return loading ? (
    <Loading />
  ) : error ? (
    <Error />
  ) : init ? (
    <NavigationContainer theme={styles}>
      {!isInitialized ? (
        <Stack.Navigator initialRouteName={'IntroScreen'}>
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
        </Stack.Navigator>
      ) : (
        <Stack.Navigator initialRouteName={'MainScreen'}>
          <Stack.Screen
            name="MainScreen"
            component={MainScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen name="DetailScreen" component={DetailScreen} />
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
      )}
    </NavigationContainer>
  ) : null;
};

export default NavigatePreset;
