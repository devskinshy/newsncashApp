import React from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import store from './redux/store';
import ConfigPreset from './presets/ConfigPreset';
import NavigatePreset from './presets/NavigatePreset';
import storageManager from './utils/storageManager';

const App = () => {
  // storageManager.remove();
  return (
    <ReduxProvider store={store}>
      <ConfigPreset>
        <NavigatePreset />
      </ConfigPreset>
    </ReduxProvider>
  );
};

export default App;
