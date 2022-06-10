import React from 'react';
import {useNavigation} from '@react-navigation/native';
import AppIntroSlider from 'react-native-app-intro-slider';
import IntroSlide from '../components/intro/IntroSlide';

const slides = [
  {
    key: 's1',
    title: '뉴스를 보기만 해도 돈을 벌수 있다고???',
    text: '독자가 관심있는 뉴스를 AI가 한번에!',
    image: require('../assets/introMoneyRobot.png'),
    backgroundColor: '#259aeb',
  },
  {
    key: 's2',
    title: '뉴스를 읽으면서 현금까지 받자!!!',
    text: 'AI 뉴스미디어 플랫폼! 뉴스앤캐시',
    image: require('../assets/introMoneyPerson.png'),
    backgroundColor: '#febe29',
  },
];

const IntroScreen = () => {
  const navigation = useNavigation();

  const onMove = () => {
    navigation.navigate('InitSettingScreen');
  };

  const RenderItem = ({item}) => {
    return <IntroSlide item={item} />;
  };

  return (
    <AppIntroSlider
      data={slides}
      renderItem={RenderItem}
      onDone={onMove}
      onSkip={onMove}
      showSkipButton={true}
      bottomButton
    />
  );
};

export default IntroScreen;
