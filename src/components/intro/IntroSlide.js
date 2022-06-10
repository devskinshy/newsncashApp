import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  box: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: 100,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginTop: 150,
  },
  text: {
    marginTop: 10,
    fontSize: 16,

    color: 'white',
    textAlign: 'center',
    paddingBottom: 50,
  },
  image: {
    width: 300,
    height: 300,
  },
});

const IntroSlide = ({item: {backgroundColor, title, image, text}}) => {
  return (
    <View style={[styles.box, {backgroundColor}]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{text}</Text>
      <Image style={styles.image} source={image} />
    </View>
  );
};

export default IntroSlide;
