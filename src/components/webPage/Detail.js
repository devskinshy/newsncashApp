import React from 'react';
import Web from '../Web';
import {WEB_URL} from '../../config';

const Detail = ({data}) => {
  const getInitData = () => {
    let init = {
      type: 'DETAIL_INIT',
      data,
    };
    return init;
  };

  return <Web uri={`${WEB_URL}/post`} initData={getInitData()} />;
};

export default Detail;
