import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 300,
    height: 200,
    marginBottom: 16,
  },
  description: {
    fontSize: 24,
    color: '#9e9e9e',
  },
});

const Empty = () => {
  return (
    <View style={styles.block}>
      <Image
        // source={{uri: 'https://via.placeholder.com/150'}}
        // source={require('../assets/images/circle.png')}
        // resizeMode={'contain'}
        source={require('../assets/images/young_and_happy.png')}
        style={styles.image}
      />
      <Text style={styles.description}>Yoo-Hoo! nothing to do!</Text>
    </View>
  );
};

export default Empty;
