import React, {useEffect, useRef} from 'react';
import Web from '../Web';
import {WEB_URL} from '../../config';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const Search = ({keyword}) => {
  const webRef = useRef(null);
  const navigation = useNavigation();

  const handleOnMessage = ({type, data}) => {
    switch (type) {
      case 'NEWS_SELECT':
        navigation.navigate('DetailScreen', data);
        break;
      default:
        break;
    }
  };

  return (
    <Web
      ref={webRef}
      uri={`${WEB_URL}/search/${encodeURIComponent(keyword)}`}
      handleOnMessage={handleOnMessage}
    />
  );
};

export default Search;
