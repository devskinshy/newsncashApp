import React from 'react';
import Login from '../components/mypage/Login';

const LoginScreen = ({fromMypage}) => {
  // fromMypage가 true ? 로그인 성공 -> 마이페이지 : 로그인 성공 -> 메인
  return <Login fromMypage={fromMypage} />;
};

export default LoginScreen;
