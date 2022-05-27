import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: 100,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
  },
  image: {
    width: 200,
    height: 200,
  },
  text: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    paddingVertical: 30,
  },
});

const IntroSlide = ({item: {backgroundColor, title, image, text}}) => {
  return (
    <View style={[styles.box, {backgroundColor}]}>
      <Text style={styles.title}>{title}</Text>
      <Image style={styles.image} source={image} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default IntroSlide;
