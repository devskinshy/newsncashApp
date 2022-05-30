import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Bookmark = ({selected, handleOnPress}) => {
  return (
    <Icon
      onPress={() => {
        handleOnPress();
      }}
      name="bookmark"
      size={24}
      color={selected ? '#333' : '#f6f6f6'}
    />
  );
};

export default Bookmark;
