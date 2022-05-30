import React from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import SettingListItem from '../components/setting/SettingListItem';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {settingReset} from '../redux/modules/setting';

const styles = StyleSheet.create({
  box: {
    height: '100%',
    backgroundColor: '#fff',
  },
});

const SettingScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onMoveBookMarkScreen = () => {
    navigation.navigate('BookMarkScreen');
  };

  const handleOnReset = () => {
    Alert.alert('사용자 정보 재설정', '사용자 정보를 재설정 하시겠습니까?', [
      {
        text: '취소',
        // onPress: () => console.log('Cancel Pressed'),
      },
      {
        text: '재설정',
        onPress: () => {
          dispatch(settingReset());
          navigation.navigate('InitSettingScreen');
        },
      },
    ]);
    console.log('click');
  };

  return (
    <View style={styles.box}>
      <SettingListItem
        title="북마크"
        icon="bookmark"
        onPress={onMoveBookMarkScreen}
      />
      <SettingListItem
        title="추천 재설정"
        icon="recommend"
        onPress={handleOnReset}
      />
    </View>
  );
};

export default SettingScreen;
