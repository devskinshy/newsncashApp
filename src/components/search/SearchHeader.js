import React, {useState} from 'react';
import {
  Keyboard,
  Pressable,
  StyleSheet,
  TextInput,
  useWindowDimensions,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
  },
  button: {
    marginLeft: 10,
  },
});

const SearchHeader = ({handleOnPress}) => {
  const {width} = useWindowDimensions();
  const [keyword, setText] = useState('');

  const onPress = () => {
    handleOnPress && handleOnPress(keyword);
    Keyboard.dismiss();
  };
  const onClean = () => {
    setText('');
  };

  return (
    <View style={[styles.block, {width: width - 32}]}>
      <TextInput
        style={styles.input}
        placeholder="검색어를 입력하세요"
        autoFocus
        value={keyword}
        onChangeText={setText}
        onSubmitEditing={onPress}
        returnKeyType={'done'}
      />
      <Pressable
        style={({pressed}) => [styles.button, pressed && {opacity: 0.5}]}
        onPress={onClean}>
        <Icon name="cancel" size={20} color="#999999" />
      </Pressable>
    </View>
  );
};

export default SearchHeader;
