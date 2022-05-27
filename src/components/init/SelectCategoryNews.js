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

const styles = StyleSheet.create({
  box: {
    marginTop: getStatusBarHeight(),
    paddingTop: 30,
    paddingBottom: 140,
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
    marginTop: 20,
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
});

const SELECTED_LIMIT = 3;

const SelectCategoryNews = () => {
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

  return (
    <View style={styles.box}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.title}>
          선호하는 언론사를 {SELECTED_LIMIT}개 선택해주세요
        </Text>
        {renderItem()}
      </ScrollView>
    </View>
  );
};

export default SelectCategoryNews;
