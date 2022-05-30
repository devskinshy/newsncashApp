import {combineReducers} from 'redux';
import {all} from 'redux-saga/effects';

import loading from './modules/loading';
import setting, {settingSaga} from './modules/setting';
import search from './modules/search';

const rootReducer = combineReducers({
  loading,
  setting,
  search,
});
export function* rootSaga() {
  yield all([settingSaga()]);
}

export default rootReducer;
