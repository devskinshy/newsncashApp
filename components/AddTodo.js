import React from 'react';
import {StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  block: {
    height: 64,
    backgroundColor: 'red',
  },
});

const AddTodo = () => {
  return <View style={styles.block} />;
};

export default AddTodo;
