import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {settingStorage} from '../../redux/modules/config';

const styles = StyleSheet.create({
  box: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#101010',
    marginTop: 135,
    textAlign: 'center',
  },
  btnBox: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btn: {
    color: '#333333',
    margin: 10,
    width: 155,
    height: 155,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ECECEC',
    borderWidth: 1,
    borderColor: '#9D9D9D',
    borderRadius: 10,
  },
  btnSelected: {
    borderColor: '#3D8AFD',
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  btnImage: {
    display: 'flex',
    width: 80,
    height: 80,
  },
  navigateBtnWrap: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 100,
  },
  navigateBtn: {
    width: '80%',
    borderRadius: 5,
    backgroundColor: '#393939',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navigateText: {
    padding: 15,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff',
  },
});

const SelectCategoryGender = ({navigation}) => {
  const dispatch = useDispatch();
  const {gender} = useSelector(({config}) => ({
    gender: config.gender,
  }));

  const selectedChecker = value => gender === value;

  const onPress = value => {
    dispatch(settingStorage('gender', value));
  };

  const renderItem = () => {
    const items = [
      {
        value: 'male',
        button: require('../../assets/male.png'),
        selectedButton: require('../../assets/male_selected.png'),
      },
      {
        value: 'female',
        button: require('../../assets/female.png'),
        selectedButton: require('../../assets/female_selected.png'),
      },
    ];

    return items.map(({value, button, selectedButton}) => (
      <TouchableOpacity
        key={value}
        style={[styles.btn, selectedChecker(value) && styles.btnSelected]}
        onPress={() => onPress(value)}>
        <Image
          source={selectedChecker(value) ? selectedButton : button}
          resizeMode="contain"
          style={styles.btnImage}
        />
      </TouchableOpacity>
    ));
  };

  return (
    <SafeAreaView style={styles.box}>
      <Text style={styles.title}>당신의 성별은 무엇입니까?</Text>

      <View style={styles.btnBox}>{renderItem()}</View>

      <View style={styles.navigateBtnWrap}>
        <TouchableOpacity
          style={styles.navigateBtn}
          onPress={() => navigation.navigate('IntroAge')}>
          <Text style={styles.navigateText}>NEXT</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SelectCategoryGender;
