import React, {useCallback, useEffect} from 'react';
import SearchHeader from '../components/search/SearchHeader';
import Search from '../components/webPage/Search';
import {useDispatch} from 'react-redux';
import {settingKeyword} from '../redux/modules/search';

const SearchScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const handleOnPress = useCallback(
    keyword => {
      dispatch(settingKeyword(keyword));
    },
    [dispatch],
  );

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => <SearchHeader handleOnPress={handleOnPress} />,
    });
  }, [navigation, handleOnPress]);

  return <Search />;
};

export default SearchScreen;
