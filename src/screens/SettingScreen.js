import React from 'react';
import {View, StyleSheet, Alert} from 'react-native';
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

  const onMoveTOSScreen = () => {
    navigation.navigate('TOSScreen');
  };

  const onMovePrivacyPolicyScreen = () => {
    navigation.navigate('PrivacyPolicyScreen');
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
        title="추천 재설정"
        icon="recommend"
        onPress={handleOnReset}
      />
      <SettingListItem
        title="서비스 이용약관"
        icon="room-service"
        onPress={onMoveTOSScreen}
      />
      <SettingListItem
        title="개인정보 처리방침"
        icon="privacy-tip"
        onPress={onMovePrivacyPolicyScreen}
      />
    </View>
  );
};

export default SettingScreen;
