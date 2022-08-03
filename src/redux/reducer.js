import {combineReducers} from 'redux';
import {all} from 'redux-saga/effects';

import loading from './modules/loading';
import config, {configSaga} from './modules/config';

const rootReducer = combineReducers({
  loading,
  config,
});
export function* rootSaga() {
  yield all([configSaga()]);
}

export default rootReducer;
