import React from 'react';
import {useNavigation} from '@react-navigation/native';
import AppIntroSlider from 'react-native-app-intro-slider';
import IntroSlide from '../components/intro/IntroSlide';

const slides = [
  {
    key: 's1',
    title: '그날의 핫이슈를 확인해 보세요.',
    text: '처음에는 다른 사용자들이 많이 보고 있는 뉴스를 먼저 보여드려요.',
    image: require('../assets/intro_mobile_recharge.png'),
    backgroundColor: '#20d2bb',
  },
  {
    key: 's2',
    title: '뉴스를 3개 이상 읽어보세요.',
    text: '뉴스를 많이 읽을수록 다음 읽을 뉴스를 더 정확하게 추천해 드려요.',
    image: require('../assets/intro_flight_ticket_booking.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 's3',
    title: '궁금한 뉴스만 쏙쏙!',
    text: 'AI가 매일 쏟아지는 뉴스 중 나에게 딱 맞춘 뉴스와 오늘의 인기뉴스를 알려드려요.',
    image: require('../assets/intro_discount.png'),
    backgroundColor: '#22bcb5',
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
