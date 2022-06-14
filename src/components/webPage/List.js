import React, {useRef} from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {WEB_URL} from '../../config';
import Web from '../Web';

const List = ({code, value}) => {
  const webRef = useRef(null);
  const {storages} = useSelector(({setting}) => ({
    storages: setting.storages,
  }));
  const navigation = useNavigation();

  const handleOnLoadEnd = () => {
    let init = {
      type: 'LIST_INIT',
    };

    if (+code < 10) {
      init.data = storages;
    } else {
      init.data = {};
    }

    if (+code < 100) {
      init.data.search_target = value;
    } else {
      init.data.category = value;
    }

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
      uri={`${WEB_URL}/list`}
      handleOnLoadEnd={handleOnLoadEnd}
      handleOnMessage={handleOnMessage}
    />
  );
};

export default List;
