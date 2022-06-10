import React, {useEffect} from 'react';
import PrivacyPolicy from '../components/setting/PrivacyPolicy';

const PrivacyPolicyScreen = ({navigation}) => {
  useEffect(() => {
    navigation.setOptions({
      headerBackTitleVisible: false,
    });
  }, [navigation]);
  return <PrivacyPolicy />;
};

export default PrivacyPolicyScreen;
