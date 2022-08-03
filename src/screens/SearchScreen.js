import React, {useCallback, useEffect, useState} from 'react';
import SearchHeader from '../components/search/SearchHeader';
import Search from '../components/webPage/Search';

const SearchScreen = ({navigation}) => {
  const [keyword, setKeyword] = useState('');

  const handleOnPress = useCallback(keyword => {
    setKeyword(keyword);
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => <SearchHeader handleOnPress={handleOnPress} />,
    });
  }, [navigation, handleOnPress]);

  return <Search keyword={keyword} />;
};

export default SearchScreen;
