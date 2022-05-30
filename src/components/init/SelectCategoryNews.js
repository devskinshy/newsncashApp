import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {useDispatch, useSelector} from 'react-redux';
import {settingInitialize} from '../../redux/modules/setting';
import storageManager from '../../utils/storageManager';

const styles = StyleSheet.create({
  box: {
    marginTop: getStatusBarHeight(),
    paddingTop: 0,
    paddingBottom: 360,
  },
  scroll: {
    flexGrow: 1,
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    marginTop: 50,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  btn: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: '#ddd',
  },
  btnSelected: {
    backgroundColor: '#238e80',
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

const SELECTED_LIMIT = 3;

const SelectCategoryNews = ({navigation}) => {
  const dispatch = useDispatch();
  const {oid_list} = useSelector(({setting: {storages}}) => ({
    oid_list: storages.oid_list,
  }));
  const {oid} = useSelector(({setting: {config}}) => ({
    oid: config.oid,
  }));

  const selectChecker = key => oid_list.includes(key);

  const addNews = newsItem => {
    if (oid_list.length >= SELECTED_LIMIT) {
      return false;
    }

    const newSelectedNews = [...oid_list, newsItem];

    dispatch(settingInitialize({oid_list: newSelectedNews}));
  };

  const removeNews = key => {
    const newSelectedNews = oid_list.filter(selectKey => !(selectKey === key));

    dispatch(settingInitialize({oid_list: newSelectedNews}));
  };

  const onPress = key => {
    if (selectChecker(key)) {
      removeNews(key);
    } else {
      addNews(key);
    }
  };

  const renderItem = () => {
    const items = Object.entries(oid).sort(([key1], [key2]) => +key1 - +key2);

    return items.map(([key, value]) => (
      <TouchableOpacity
        key={key}
        style={[styles.btn, selectChecker(key) && styles.btnSelected]}
        onPress={() => onPress(key)}>
        <Text>{value}</Text>
      </TouchableOpacity>
    ));
  };

  const {storages} = useSelector(({setting}) => ({
    storages: setting.storages,
  }));

  const onDone = async () => {
    await storageManager.set('storage', storages);
    console.log(storages);
    navigation.navigate('MainScreen');
  };

  return (
    <View style={styles.box}>
      <Text style={styles.title}>
        선호하는 언론사를 {SELECTED_LIMIT}개 선택해주세요
      </Text>
      <ScrollView contentContainerStyle={styles.scroll}>
        {renderItem()}
      </ScrollView>
      <View style={styles.navigateBtnWrap}>
        <TouchableOpacity style={styles.navigateBtn} onPress={onDone}>
          <Text style={styles.navigateText}>DONE</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navigatePrevBtn}
          onPress={() => navigation.navigate('IntroAge')}>
          <Text style={styles.navigateText}>PREV</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SelectCategoryNews;
