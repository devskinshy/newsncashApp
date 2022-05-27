import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {useDispatch, useSelector} from 'react-redux';
import {settingInitialize} from '../../redux/modules/setting';

const styles = StyleSheet.create({
  box: {
    marginTop: getStatusBarHeight(),
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    marginTop: 120,
    fontWeight: 'bold',
  },
  btnBox: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btn: {
    color: '#333333',
    margin: 10,
    width: 150,
    height: 150,
  },
  btnSelected: {
    borderRadius: 10,
    backgroundColor: '#ddd',
  },
  btnImage: {
    display: 'flex',
    width: 150,
    height: 150,
  },
});

const SelectCategoryGender = () => {
  const dispatch = useDispatch();
  const {gender} = useSelector(({setting: {storages}}) => ({
    gender: storages.gender,
  }));

  const selectedChecker = value => gender === value;

  const onPress = value => {
    dispatch(settingInitialize({gender: value}));
  };

  const renderItem = () => {
    const items = [
      {value: 'male', image: require('../../assets/male.png')},
      {value: 'female', image: require('../../assets/female.png')},
    ];

    return items.map(({value, image}) => (
      <TouchableOpacity
        key={value}
        style={[styles.btn, selectedChecker(value) && styles.btnSelected]}
        onPress={() => onPress(value)}>
        <Image source={image} resizeMode="contain" style={styles.btnImage} />
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.box}>
      <Text style={styles.title}>당신의 성별은 무엇입니까?</Text>

      <View style={styles.btnBox}>{renderItem()}</View>
    </View>
  );
};

export default SelectCategoryGender;
