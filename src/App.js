import React from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import store from './redux/store';
import SettingPreset from './presets/SettingPreset';
import NavigatePreset from './presets/NavigatePreset';
import storageManager from './utils/storageManager';

const App = () => {
  // storageManager.remove();
  return (
    <ReduxProvider store={store}>
      <SettingPreset>
        <NavigatePreset />
      </SettingPreset>
    </ReduxProvider>
  );
};

export default App;
