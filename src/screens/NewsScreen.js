import React from 'react';
import {useSelector} from 'react-redux';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import List from '../components/webPage/List';

const Tab = createMaterialTopTabNavigator();

const NewsScreen = () => {
  const {gnb} = useSelector(({setting: {config}}) => ({
    gnb: config.gnb,
  }));

  const renderItem = () => {
    const items = Object.entries(gnb).sort(([key1], [key2]) => +key1 - +key2);

    return items.map(([code, value]) => (
      <Tab.Screen key={code} name={value}>
        {() => <List code={code} value={value} />}
      </Tab.Screen>
    ));
  };

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarItemStyle: {width: 77},
      }}>
      {renderItem()}
    </Tab.Navigator>
  );
};

export default NewsScreen;
