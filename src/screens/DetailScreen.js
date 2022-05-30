import React, {useCallback, useEffect} from 'react';
import Detail from '../components/webPage/Detail';
import Bookmark from '../components/detail/Bookmark';
import {useDispatch, useSelector} from 'react-redux';
import {addBookmark, deleteBookmark} from '../redux/modules/setting';
import storageManager from '../utils/storageManager';

const DetailScreen = ({route, navigation}) => {
  const {
    params: {idsk},
  } = route;
  const dispatch = useDispatch();
  const {bookmark} = useSelector(({setting}) => ({
    bookmark: setting.bookmark,
  }));

  const selectedChecker = useCallback(
    () => bookmark.includes(idsk),
    [bookmark, idsk],
  );

  const handleOnPress = useCallback(() => {
    if (selectedChecker()) {
      dispatch(deleteBookmark(idsk));
    } else {
      dispatch(addBookmark(idsk));
    }
  }, [dispatch, idsk, selectedChecker]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Bookmark selected={selectedChecker()} handleOnPress={handleOnPress} />
      ),
    });
  }, [handleOnPress, navigation, route, selectedChecker]);

  useEffect(() => {
    storageManager.set('bookmark', bookmark);
  }, [bookmark]);

  return <Detail data={route.params} />;
};

export default DetailScreen;
