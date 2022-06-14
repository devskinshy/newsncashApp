import React, {useEffect, useRef} from 'react';
import {StyleSheet, Animated, View, Text} from 'react-native';

const styles = StyleSheet.create({
  box: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  fadingContainer: {
    position: 'absolute',
    width: 30,
    height: 30,
    borderRadius: 40,
    backgroundColor: '#36D7B7',
    opacity: 0.6,
  },

  buttonRow: {
    flexBasis: 100,
    justifyContent: 'space-evenly',
    marginVertical: 16,
  },
});

const ListLoading = () => {
  const animationBigCircle = useRef(new Animated.Value(0)).current;
  const animationSmallCircle = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.spring(animationBigCircle, {
        useNativeDriver: true,
        // spring options
        toValue: 1,
        tension: 1,
        friction: 10,
      }),
      {iterations: -1},
    ).start();
  }, [animationBigCircle]);

  useEffect(() => {
    Animated.loop(
      Animated.spring(animationSmallCircle, {
        useNativeDriver: true,
        // spring options
        toValue: 1,
        tension: 1,
        friction: 10,
        delay: 1000,
      }),
      {iterations: -1},
    ).start();
  }, [animationSmallCircle]);

  return (
    <View style={styles.box}>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            transform: [
              {
                scaleX: animationBigCircle.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1.5],
                }),
              },
              {
                scaleY: animationBigCircle.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1.5],
                }),
              },
            ],
          },
        ]}
      />
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            transform: [
              {
                scaleX: animationSmallCircle.interpolate({
                  inputRange: [0, 0.1],
                  outputRange: [0, 0.3],
                }),
              },
              {
                scaleY: animationSmallCircle.interpolate({
                  inputRange: [0, 0.1],
                  outputRange: [0, 0.3],
                }),
              },
            ],
          },
        ]}
      />
    </View>
  );
};

export default ListLoading;
