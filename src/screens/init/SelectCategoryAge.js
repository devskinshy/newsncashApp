import React, {useRef} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {Picker} from '@react-native-picker/picker';
import {useDispatch, useSelector} from 'react-redux';
import {settingInitialize} from '../../redux/modules/setting';

const styles = StyleSheet.create({
  box: {
    flex: 1,
    marginTop: getStatusBarHeight(),
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#101010',
    textAlign: 'center',
    marginTop: 135,
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
  navigatePrevBtn: {
    marginTop: 10,
    width: '80%',
    borderRadius: 5,
    backgroundColor: '#A6A6A6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navigateText: {
    padding: 15,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff',
  },
  pickerWrap: {
    marginTop: 20,
    marginLeft: 50,
    marginRight: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#4476F8',
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
    const items = [...Array(6)];

    return items.map((_, index) => (
      <Picker.Item
        key={index}
        label={`${(index + 1) * 10}대`}
        value={`${(index + 1) * 10}age`}
      />
    ));
  };

  return (
    <SafeAreaView style={styles.box}>
      <Text style={styles.title}>당신의 나이대를 입력해주세요.</Text>
      <View style={styles.pickerWrap}>
        <Picker
          ref={pickerRef}
          mode="dialog"
          selectedValue={age}
          onValueChange={onValueChange}>
          {renderItem()}
        </Picker>
      </View>
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
    </SafeAreaView>
  );
};

export default SelectCategoryAge;
