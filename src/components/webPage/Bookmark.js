import React, {useRef} from 'react';
import {Text} from 'react-native';
import {useSelector} from 'react-redux';
import {WEB_URL} from '../../config';
import Web from '../Web';
import {useNavigation} from '@react-navigation/native';

const Bookmark = () => {
  const webRef = useRef(null);
  const {bookmark} = useSelector(({setting}) => ({
    bookmark: setting.bookmark,
  }));
  const navigation = useNavigation();
  console.log(bookmark);
  const handleOnLoadEnd = () => {
    let init = {
      type: 'BOOKMARK_INIT',
      data: {
        idsk: bookmark,
      },
    };

    webRef.current.postMessage(JSON.stringify(init));
  };

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
      uri={`${WEB_URL}/bookmark`}
      handleOnLoadEnd={handleOnLoadEnd}
      handleOnMessage={handleOnMessage}
    />
  );
};

export default Bookmark;
