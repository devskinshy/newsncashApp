import {createActions, handleActions} from 'redux-actions';
import produce from 'immer';
import {takeLatest} from 'redux-saga/effects';
import createRequestSaga, {
  createRequestActionTypes,
} from '../createRequestSaga';
import storageManager from '../../utils/storageManager';
import * as SettingAPI from '../../api/setting';

const initialState = {
  error: null,
  isInitialized: false,
  config: {
    gnb: {},
    oid: {},
  },
  storages: {
    gender: '',
    age: 0,
    oid_list: [],
  },
};

const [INITIALIZE, INITIALIZE_SUCCESS, INITIALIZE_FAILURE] =
  createRequestActionTypes('setting/INITIALIZE');
const SETTING_INITIALIZE = 'setting/SETTING_INITIALIZE';

export const {
  setting: {initialize, settingInitialize},
} = createActions({
  [INITIALIZE]: () => {},
  [SETTING_INITIALIZE]: value => value,
});

const initializeSaga = createRequestSaga(
  INITIALIZE,
  SettingAPI.getConfig,
  async () => await storageManager.get('storage'),
);

export function* settingSaga() {
  yield takeLatest(INITIALIZE, initializeSaga);
}

const setting = handleActions(
  {
    [INITIALIZE_SUCCESS]: (state, {payload: [config, storages]}) => {
      return produce(state, draft => {
        draft.isInitialized = !!storages;
        draft.config = {
          ...state.config,
          ...config,
        };
        draft.storages = {
          ...state.storages,
          ...storages,
        };
      });
    },
    [INITIALIZE_FAILURE]: (state, {payload}) => {
      return produce(state, draft => {
        draft.error = payload.message;
      });
    },
    [SETTING_INITIALIZE]: (state, {payload}) => {
      return produce(state, draft => {
        draft.storages = {
          ...state.storages,
          ...payload,
        };
      });
    },
  },
  initialState,
);

export default setting;
