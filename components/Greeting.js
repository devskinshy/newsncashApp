import React from 'react';
import {Text, View} from 'react-native';

const Greeting = ({name}) => {
  return (
    <View>
      <Text>Hello {name}!</Text>
    </View>
  );
};

Greeting.defaultProps = {
  name: 'React Native',
};

export default Greeting;
