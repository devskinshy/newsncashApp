import React, {useCallback, useEffect, useRef} from 'react';
import {WEB_URL} from '../../config';
import Web from '../Web';
import {useNavigation} from '@react-navigation/native';

const Bookmark = ({bookmark}) => {
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

  const handleOnLoadEnd = useCallback(() => {
    let init = {
      type: 'INIT',
      data: {bookmark},
    };

    webRef.current.postMessage(JSON.stringify(init));
  }, [bookmark]);

  useEffect(() => {
    handleOnLoadEnd();
  }, [bookmark, handleOnLoadEnd]);

  return (
    <Web
      ref={webRef}
      uri={`${WEB_URL}/bookmark`}
      handleOnLoadEnd={handleOnLoadEnd}
      handleOnMessage={handleOnMessage}
    />
  );
};

export default Bookmark;
