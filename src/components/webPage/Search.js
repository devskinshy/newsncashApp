import React, {useEffect, useRef} from 'react';
import Web from '../Web';
import {WEB_URL} from '../../config';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const Search = () => {
  const webRef = useRef(null);
  const navigation = useNavigation();
  const {keyword} = useSelector(({search}) => ({
    keyword: search.keyword,
  }));

  const handleOnMessage = ({type, data}) => {
    switch (type) {
      case 'LIST_SELECT':
        navigation.navigate('DetailScreen', data);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (!keyword) {
      return;
    }
    const init = {
      type: 'SEARCH_KEYWORD',
      data: {search_target: keyword},
    };

    webRef.current.postMessage(JSON.stringify(init));
  }, [keyword]);

  return (
    <Web
      ref={webRef}
      uri={`${WEB_URL}/search`}
      handleOnMessage={handleOnMessage}
    />
  );
};

export default Search;
