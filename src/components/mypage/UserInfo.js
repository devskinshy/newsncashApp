import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  box: {
    paddingHorizontal: 20,
    paddingVertical: 50,
    backgroundColor: '#259aeb',
  },
  username: {
    fontWeight: 'bold',
    color: '#ffffff',
    fontSize: 36,
  },
  point: {
    marginTop: 15,
    color: '#ffffff',
    fontSize: 18,
  },
});

const UserInfo = ({username = 'test', point = 1000}) => {
  return (
    <View style={styles.box}>
      <Text style={styles.username}>{username}님</Text>
      <Text style={styles.point}>보유 포인트 : {point}</Text>
    </View>
  );
};

export default UserInfo;
