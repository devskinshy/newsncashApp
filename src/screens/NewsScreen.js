import React from 'react';
import {useSelector} from 'react-redux';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import List from '../components/webPage/List';

const Tab = createMaterialTopTabNavigator();

const NewsScreen = () => {
  const {gnb, gender, age, oid_list} = useSelector(({config}) => ({
    gnb: config.gnb,
    gender: config.gender,
    age: config.age,
    oid_list: config.oid_list,
  }));

  const renderItem = () => {
    const items = Object.entries(gnb).sort(([key1], [key2]) => +key1 - +key2);

    return items.map(([code, value]) => {
      return (
        <Tab.Screen key={code} name={value}>
          {() => (
            <List code={code} gender={gender} age={age} oid_list={oid_list} />
          )}
        </Tab.Screen>
      );
    });
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
