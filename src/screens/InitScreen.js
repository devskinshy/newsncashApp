import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text} from 'react-native';
import SelectCategoryGender from '../components/init/SelectCategoryGender';
import SelectCategoryAge from '../components/init/SelectCategoryAge';
import SelectCategoryNews from '../components/init/SelectCategoryNews';
import storageManager from '../utils/storageManager';
import {useSelector} from 'react-redux';

const slides = [
  {
    key: 'SelectCategoryGender',
    component: <SelectCategoryGender />,
  },
  {
    key: 'SelectCategoryAge',
    component: <SelectCategoryAge />,
  },
  {
    key: 'SelectCategoryNews',
    component: <SelectCategoryNews />,
  },
];

const styles = StyleSheet.create({
  nextBtn: {
    backgroundColor: '#000',
    marginTop: 10,
    padding: 10,

    textAlign: 'center',
    color: '#fff',
  },
  doneBtn: {
    backgroundColor: '#666',
    marginTop: 10,
    padding: 10,

    textAlign: 'center',
    color: '#fff',
  },
  skipBtn: {
    backgroundColor: '#666',
    marginTop: 10,
    padding: 10,

    textAlign: 'center',
    color: '#fff',
  },
});

const InitScreen = () => {
  const navigation = useNavigation();
  const {storages} = useSelector(({setting}) => ({
    storages: setting.storages,
  }));

  const onMove = () => {
    navigation.navigate('MainScreen');
  };
  const onDone = async () => {
    console.log(storages);
    await storageManager.set('storage', storages);
    onMove();
  };

  const keyExtractor = item => item.key;

  const renderNextButton = () => {
    return <Text style={styles.nextBtn}>Next</Text>;
  };
  const renderDoneButton = () => {
    return <Text style={styles.doneBtn}>Done</Text>;
  };
  const renderSkipButton = () => {
    return <Text style={styles.skipBtn}>Skip</Text>;
  };

  return (
    <AppIntroSlider
      keyExtractor={keyExtractor}
      data={slides}
      renderItem={({item}) => item.component}
      renderNextButton={renderNextButton}
      renderDoneButton={renderDoneButton}
      renderSkipButton={renderSkipButton}
      onDone={onDone}
      bottomButton
    />
  );
};

export default InitScreen;
