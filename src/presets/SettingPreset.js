import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {initialize} from '../redux/modules/setting';

const SettingPreset = ({children}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('SettingPreset', 'init');
    dispatch(initialize());
  }, [dispatch]);

  return <>{children}</>;
};

export default SettingPreset;
