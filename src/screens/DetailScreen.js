import React from 'react';
import {Text} from 'react-native';
import Detail from '../components/webPage/Detail';

const DetailScreen = ({route}) => {
  return <Detail data={route.params} />;
};

export default DetailScreen;
