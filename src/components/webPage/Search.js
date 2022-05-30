import React, {useRef} from 'react';
import Web from '../Web';
import {WEB_URL} from '../../config';
import {useNavigation} from '@react-navigation/native';

const Search = () => {
  const webRef = useRef(null);
  const navigation = useNavigation();

  const handleOnMessage = ({type, data}) => {
    switch (type) {
      case 'LIST_SELECT':
        navigation.navigate('DetailScreen', data);
        break;
      default:
        break;
    }
  };

  return (
    <Web
      ref={webRef}
      uri={`${WEB_URL}/search`}
      handleOnMessage={handleOnMessage}
    />
  );
};

export default Search;
