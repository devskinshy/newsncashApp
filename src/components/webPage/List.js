import React, {useRef} from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {WEB_URL} from '../../config';
import Web from '../Web';
import qs from 'qs';

const List = ({code, gender, age, oid_list}) => {
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

  const getURI = () => {
    let uri = `${WEB_URL}/list/${code}`;

    if (!+code) {
      const search = qs.stringify(
        {gender, age, oid_list},
        {addQueryPrefix: true},
      );
      uri = `${uri}${search}`;
    }

    return uri;
  };

  return <Web ref={webRef} uri={getURI()} handleOnMessage={handleOnMessage} />;
};

export default List;
