import React, {useEffect} from 'react';
import Detail from '../components/webPage/Detail';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DetailScreen = ({route, navigation}) => {
  const test = '20220527.0013208287.001';
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Icon
          name="bookmark"
          size={24}
          color={route.params.idsk === test ? '#333' : '#f6f6f6'}
        />
      ),
    });
  }, [navigation, route]);

  return <Detail data={route.params} />;
};

export default DetailScreen;
