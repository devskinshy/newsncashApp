import React, {useState} from 'react';
import {Button, SafeAreaView, Text} from 'react-native';
import Box from './components/Box';

const App = () => {
  const [visible, setVisible] = useState(true);

  const onPress = () => {
    setVisible(!visible);
  };

  return (
    <SafeAreaView>
      <Button title={'toggle'} onPress={onPress} />
      {visible && <Box rounded size={'large'} color={'blue'} />}
    </SafeAreaView>
  );
};

export default App;
