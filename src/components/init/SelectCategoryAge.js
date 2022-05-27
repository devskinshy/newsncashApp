import React, {useRef} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {Picker} from '@react-native-picker/picker';
import {useDispatch, useSelector} from 'react-redux';
import {settingInitialize} from '../../redux/modules/setting';

const styles = StyleSheet.create({
  box: {
    marginTop: getStatusBarHeight(),
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    marginTop: 150,
    fontWeight: 'bold',
  },
});

const SelectCategoryAge = () => {
  const pickerRef = useRef();
  const dispatch = useDispatch();
  const {age} = useSelector(({setting: {storages}}) => ({
    age: storages.age,
  }));

  const onValueChange = value => {
    if (age === value) {
      return;
    }

    dispatch(settingInitialize({age: value}));
  };

  const renderItem = () => {
    const items = [...Array(100)];

    return items.map((_, index) => (
      <Picker.Item key={index} label={`${index}`} value={index} />
    ));
  };

  return (
    <View style={styles.box}>
      <Text style={styles.title}>당신의 성별은 무엇입니까?</Text>

      <Picker
        ref={pickerRef}
        mode="dialog"
        selectedValue={age}
        onValueChange={onValueChange}>
        {renderItem()}
      </Picker>
    </View>
  );
};

export default SelectCategoryAge;
