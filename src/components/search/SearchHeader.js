import React, {useState} from 'react';
import {
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

const SearchHeader = () => {
  const {width} = useWindowDimensions();
  const [keyword, onChangeText] = useState('');
  console.log('keyword', keyword);
  return (
    <View style={[styles.block, {width: width - 32}]}>
      <TextInput
        style={styles.input}
        placeholder="검색어를 입력하세요"
        autoFocus
        value={keyword}
        onChangeText={onChangeText}
      />
      <Pressable
        style={({pressed}) => [styles.button, pressed && {opacity: 0.5}]}
        onPress={() => console.log('delete')}>
        <Icon name="cancel" size={20} color="#999999" />
      </Pressable>
    </View>
  );
};

export default SearchHeader;
