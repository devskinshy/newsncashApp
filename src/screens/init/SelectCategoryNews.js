import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {useDispatch, useSelector} from 'react-redux';
import {settingInitialize} from '../../redux/modules/setting';
import storageManager from '../../utils/storageManager';

const styles = StyleSheet.create({
  box: {
    flex: 1,
    marginTop: getStatusBarHeight(),
    paddingTop: 0,
  },
  scrollWrap: {
    paddingTop: 50,
    height: 400,
    alignItems: 'center',
  },
  scroll: {
    width: '83%',
    flexGrow: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#101010',
    marginTop: 80,
    textAlign: 'center',
  },
  btn: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    paddingTop: 12,
    paddingBottom: 12,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#A4A4A4',
    borderRadius: 5,
    fontWeight: 'normal',
  },
  btnSelected: {
    fontWeight: 900,
    borderColor: '#3D8AFD',
    backgroundColor: '#3D8AFD',
  },
  btnText: {
    color: '#333333',
  },
  btnSelectedText: {
    color: '#ffffff',
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
        <Text
          style={[
            styles.btnText,
            selectChecker(key) && styles.btnSelectedText,
          ]}>
          {value}
        </Text>
      </TouchableOpacity>
    ));
  };

  const {storages} = useSelector(({setting}) => ({
    storages: setting.storages,
  }));

  const onDone = async () => {
    await storageManager.set('storage', storages);
    navigation.reset({routes: [{name: 'MainScreen'}]});
  };

  return (
    <SafeAreaView style={styles.box}>
      <Text style={styles.title}>
        선호하는 언론사를 {SELECTED_LIMIT}개 선택해주세요 (선택)
      </Text>
      <View style={styles.scrollWrap}>
        <ScrollView contentContainerStyle={styles.scroll}>
          {renderItem()}
        </ScrollView>
      </View>
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
    </SafeAreaView>
  );
};

export default SelectCategoryNews;
