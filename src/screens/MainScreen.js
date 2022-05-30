import React from 'react';
import {StatusBar} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import NewsScreen from './NewsScreen';
import SearchScreen from './SearchScreen';
import SettingScreen from './SettingScreen';

const Tab = createBottomTabNavigator();

const MainScreen = () => {
  return (
    <>
      <StatusBar />
      <Tab.Navigator>
        <Tab.Screen
          name="News"
          component={NewsScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="text-snippet" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="search" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Setting"
          component={SettingScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="settings" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default MainScreen;
