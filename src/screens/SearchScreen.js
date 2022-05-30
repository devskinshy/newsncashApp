import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import EmptySearchResult from '../components/search/EmptySearchResult';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SearchHeader from '../components/search/SearchHeader';

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

const SearchScreen = ({inputText = '', navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => <SearchHeader />,
    });
    console.log('navigation.setOptions', navigation.setOptions.headerTitle);
  }, [navigation]);

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
