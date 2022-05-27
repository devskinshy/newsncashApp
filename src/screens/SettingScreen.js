import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SettingListItem from '../components/setting/SettingListItem';

const styles = StyleSheet.create({
  box: {
    height: '100%',
    backgroundColor: '#fff',
  },
});

const SettingScreen = () => {
  return (
    <View style={styles.box}>
      <SettingListItem title="북마크" icon="bookmark" />
      <SettingListItem title="추천 재설정" icon="recommend" />
    </View>
  );
};

export default SettingScreen;
