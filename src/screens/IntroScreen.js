import React from 'react';
import {useNavigation} from '@react-navigation/native';
import AppIntroSlider from 'react-native-app-intro-slider';
import IntroSlide from '../components/intro/IntroSlide';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const slides = [
  {
    key: 's1',
    title: '뉴스를 보기만 해도 돈을 벌수 있다고?',
    text: '독자가 관심있는 뉴스를 AI가 한번에!',
    image: require('../assets/intro01.png'),
    backgroundColor: '#ffffff',
  },
  {
    key: 's2',
    title: '뉴스를 읽으면서 현금까지 받자!!!',
    text: 'AI 뉴스미디어 플랫폼! 뉴스앤캐시',
    image: require('../assets/intro02.png'),
    backgroundColor: '#ffffff',
  },
];

const styles = StyleSheet.create({
  doneButton: {
    borderRadius: 5,
    backgroundColor: '#393939',
    marginBottom: 100,
  },
  doneButtonText: {
    padding: 15,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
  },
});

const IntroScreen = () => {
  const navigation = useNavigation();

  const onMove = () => {
    navigation.navigate('InitSettingScreen');
  };

  const doneButton = () => {
    return (
      <TouchableOpacity style={styles.doneButton} onPress={onMove}>
        <Text style={styles.doneButtonText}>DONE</Text>
      </TouchableOpacity>
    );
  };

  const RenderItem = ({item}) => {
    return <IntroSlide item={item} />;
  };

  return (
    <AppIntroSlider
      data={slides}
      renderItem={RenderItem}
      renderDoneButton={doneButton}
      onDone={onMove}
      onSkip={onMove}
      showSkipButton={false}
      showNextButton={false}
      dotStyle={{backgroundColor: 'rgba(0,0,0,0.2)', marginBottom: 50}}
      activeDotStyle={{backgroundColor: 'rgba(0,0,0,1)', marginBottom: 50}}
      bottomButton
    />
  );
};

export default IntroScreen;
