import React from 'react';
import SelectCategoryGender from './init/SelectCategoryGender';
import SelectCategoryAge from './init/SelectCategoryAge';
import SelectCategoryNews from './init/SelectCategoryNews';
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
