import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import EmptySearchResult from '../components/search/EmptySearchResult';

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

const SearchScreen = ({inputText = ''}) => {
  if (!inputText) {
    return <EmptySearchResult type={'EMPTY_KEYWORD'} />;
  }
  return (
    <View style={styles.block}>
      <Text>SearchScreen</Text>
    </View>
  );
};

export default SearchScreen;
