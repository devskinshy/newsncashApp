import {login, getProfile} from '@react-native-seoul/kakao-login';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const styles = StyleSheet.create({
  box: {
    marginTop: getStatusBarHeight(),
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginTop: 250,
    fontWeight: 'bold',
  },
  image: {
    width: 200,
  },
});

const Login = ({fromMypage}) => {
  // fromMypage가 true ? 로그인 성공 -> 마이페이지 : 로그인 성공 -> 메인
  const signInWithKakao = async () => {
    const token = await login();
    const profile = await getProfile();

    console.log(JSON.stringify(token));
    console.log(JSON.stringify(profile));
  };

  return (
    <View style={styles.box}>
      <Text style={styles.title}>LOGIN</Text>
      <TouchableOpacity onPress={signInWithKakao}>
        <Image
          source={require('../../assets/kakao_login_large_narrow.png')}
          style={styles.image}
          resizeMode={'contain'}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Login;
