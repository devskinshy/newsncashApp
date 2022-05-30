import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import SelectCategoryGender from '../components/init/SelectCategoryGender';
import SelectCategoryAge from '../components/init/SelectCategoryAge';
import SelectCategoryNews from '../components/init/SelectCategoryNews';
import storageManager from '../utils/storageManager';
import {useSelector} from 'react-redux';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const InitScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName="Gender"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="IntroGender" component={SelectCategoryGender} />
      <Stack.Screen name="IntroAge" component={SelectCategoryAge} />
      <Stack.Screen name="IntroNews" component={SelectCategoryNews} />
    </Stack.Navigator>
  );
};

export default InitScreen;
