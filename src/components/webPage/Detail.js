import React, {useRef} from 'react';
import Web from '../Web';
import {WEB_URL} from '../../config';

const Detail = ({idsk}) => {
  const webRef = useRef(null);

  return <Web ref={webRef} uri={`${WEB_URL}/detail/${idsk}`} />;
};

export default Detail;
