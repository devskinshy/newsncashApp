import React from 'react';
import {Image, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  imageWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
});

const Loading = () => {
  return (
    <View style={styles.imageWrap}>
      {/* TODO : 이미지변경 */}
      <Image
        source={require('../assets/introMoneyRobot.png')}
        style={styles.image}
      />
    </View>
  );
};

export default Loading;
