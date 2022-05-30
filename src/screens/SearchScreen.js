import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

const SearchScreen = () => {
  return (
    <View style={styles.block}>
      <Text>SearchScreen</Text>
    </View>
  );
};

export default SearchScreen;
