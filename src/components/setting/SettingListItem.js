import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  box: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15,
  },
  titleWrap: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  titleText: {
    marginLeft: 10,
    fontSize: 18,
    color: '#4b4b4b',
  },
});

const SettingListItem = ({title, icon, onPress}) => {
  return (
    <TouchableOpacity style={styles.box} onPress={onPress}>
      <View style={styles.titleWrap}>
        <Icon name={icon} size={36} color="#4b4b4b" />
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <Icon name="chevron-right" size={36} color="#4b4b4b" />
    </TouchableOpacity>
  );
};

export default SettingListItem;
