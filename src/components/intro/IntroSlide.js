import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  box: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#101010',
    textAlign: 'center',
    marginTop: 16,
  },
  text: {
    marginTop: 150,
    fontSize: 16,
    color: '#2260FF',
    textAlign: 'center',
  },
  image: {
    marginTop: 100,
    width: 250,
    height: 250,
  },
});

const IntroSlide = ({item: {backgroundColor, title, image, text}}) => {
  return (
    <View style={[styles.box, {backgroundColor}]}>
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.title}>{title}</Text>
      <Image style={styles.image} source={image} resizeMode="contain" />
    </View>
  );
};

export default IntroSlide;
