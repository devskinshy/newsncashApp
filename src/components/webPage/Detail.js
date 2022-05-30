import React, {useRef} from 'react';
import Web from '../Web';
import {WEB_URL} from '../../config';

const Detail = ({data}) => {
  const webRef = useRef(null);

  console.log(data);

  const handleOnLoadEnd = () => {
    let init = {
      type: 'DETAIL_INIT',
      data,
    };

    webRef.current.postMessage(JSON.stringify(init));
  };

  return (
    <Web
      ref={webRef}
      uri={`${WEB_URL}/detail`}
      handleOnLoadEnd={handleOnLoadEnd}
    />
  );
};

export default Detail;
