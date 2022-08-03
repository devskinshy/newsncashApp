import React from 'react';
import Bookmark from '../components/webPage/Bookmark';
import {useSelector} from 'react-redux';

const BookMarkScreen = () => {
  const {bookmark} = useSelector(({config}) => ({
    bookmark: config.bookmark,
  }));

  return <Bookmark bookmark={bookmark} />;
};

export default BookMarkScreen;
