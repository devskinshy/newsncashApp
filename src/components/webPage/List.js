import React from 'react';
import Web from '../Web';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {WEB_URL} from '../../config';

const List = ({code, value}) => {
  const {storages} = useSelector(({setting}) => ({
    storages: setting.storages,
  }));
  const navigation = useNavigation();

  const getInitData = () => {
    let init = {
      type: 'LIST_INIT',
      data: {...storages},
    };

    if (+code < 100) {
      init.data['search_target'] = value;
    } else {
      init.data['category'] = value;
    }

    return init;
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
      uri={`${WEB_URL}/list`}
      initData={getInitData()}
      handleOnMessage={handleOnMessage}
    />
  );
};

export default List;
