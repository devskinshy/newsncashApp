import React from 'react';
import {StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  box: {
    width: 64,
    height: 64,
    backgroundColor: 'black',
  },
});

const Box = () => {
  return <View style={styles.box} />;
};

export default Box;
