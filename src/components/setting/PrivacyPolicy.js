import React, {useRef} from 'react';
import {WEB_URL} from '../../config';
import Web from '../Web';

const TOS = () => {
  const webRef = useRef(null);

  return <Web ref={webRef} uri={`${WEB_URL}/privacyPolicy`} />;
};

export default TOS;
