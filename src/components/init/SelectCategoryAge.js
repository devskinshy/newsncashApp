import React, {useRef} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
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
  navigateBtnWrap: {
    alignItems: 'center',
  },
  navigateBtn: {
    marginTop: 50,
    width: '80%',
    backgroundColor: '#4b4b4b',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  navigatePrevBtn: {
    marginTop: 10,
    width: '80%',
    backgroundColor: '#c9c9c9',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  navigateText: {
    color: '#fff',
  },
});

const SelectCategoryAge = ({navigation}) => {
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
      <Text style={styles.title}>당신의 나이대를 입력해주세요.</Text>

      <Picker
        ref={pickerRef}
        mode="dialog"
        selectedValue={age}
        onValueChange={onValueChange}>
        {renderItem()}
      </Picker>
      <View style={styles.navigateBtnWrap}>
        <TouchableOpacity
          style={styles.navigateBtn}
          onPress={() => navigation.navigate('IntroNews')}>
          <Text style={styles.navigateText}>NEXT</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navigatePrevBtn}
          onPress={() => navigation.navigate('IntroGender')}>
          <Text style={styles.navigateText}>PREV</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SelectCategoryAge;
