import React from 'react';
import {StatusBar} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import NewsScreen from './NewsScreen';
import SearchScreen from './SearchScreen';
import BookMarkScreen from './BookMarkScreen';
import SettingScreen from './SettingScreen';
import MypageScreen from './MypageScreen';
import LoginScreen from './LoginScreen';

const Tab = createBottomTabNavigator();

const MainScreen = () => {
  const login = false;

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
            title: '뉴스',
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="search" size={size} color={color} />
            ),
            title: '검색',
          }}
        />
        <Tab.Screen
          name="Bookmark"
          component={BookMarkScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="bookmark" size={size} color={color} />
            ),
            title: '북마크',
          }}
        />
        {!login ? (
          <Tab.Screen
            name="Mypage"
            component={LoginScreen}
            options={{
              tabBarIcon: ({color, size}) => (
                <Icon name="person" size={size} color={color} />
              ),
              title: '마이페이지',
              headerShown: false,
            }}
          />
        ) : (
          <Tab.Screen
            name="Mypage"
            component={MypageScreen}
            options={{
              tabBarIcon: ({color, size}) => (
                <Icon name="person" size={size} color={color} />
              ),
              title: '마이페이지',
            }}
          />
        )}
        <Tab.Screen
          name="Setting"
          component={SettingScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="settings" size={size} color={color} />
            ),
            title: '설정',
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default MainScreen;
