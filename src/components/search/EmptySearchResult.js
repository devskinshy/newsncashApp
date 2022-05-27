import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#9e9e9e',
    fontSize: 16,
  },
});

const message = {
  NOT_FOUND: '검색 결과가 없습니다.',
  EMPTY_KEYWORD: '검색어를 입력하세요.',
};

const EmptySearchResult = ({type}) => {
  return (
    <View style={styles.block}>
      <Text style={styles.text}>{message[type]}</Text>
    </View>
  );
};

export default EmptySearchResult;
