import React, {useEffect} from 'react';
import TOS from '../components/setting/TOS';

const TOSScreen = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      headerBackTitleVisible: false,
    });
  }, [navigation]);
  return <TOS />;
};

export default TOSScreen;
