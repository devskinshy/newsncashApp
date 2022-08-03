import React, {useCallback, useEffect} from 'react';
import Detail from '../components/webPage/Detail';
import Bookmark from '../components/detail/Bookmark';
import {useDispatch, useSelector} from 'react-redux';
import storageManager from '../utils/storageManager';
import {changeBookmark} from '../redux/modules/config';

const DetailScreen = ({route, navigation}) => {
  const {
    params: {idsk},
  } = route;
  const {bookmark} = useSelector(({config}) => ({
    bookmark: config.bookmark,
  }));
  const dispatch = useDispatch();

  const selectedChecker = useCallback(
    () => bookmark.includes(idsk),
    [bookmark, idsk],
  );

  const handleOnPress = useCallback(() => {
    let newBookmark;
    if (selectedChecker()) {
      newBookmark = bookmark.filter(item => item !== idsk);
    } else {
      newBookmark = [...bookmark, idsk];
    }
    dispatch(changeBookmark(newBookmark));
  }, [dispatch, bookmark, idsk, selectedChecker]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Bookmark selected={selectedChecker()} handleOnPress={handleOnPress} />
      ),
      title: '',
      headerBackTitleVisible: false,
    });
  }, [handleOnPress, navigation, route, selectedChecker]);

  return <Detail idsk={idsk} />;
};

export default DetailScreen;
