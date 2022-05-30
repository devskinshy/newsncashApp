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
    age: '',
    oid_list: [],
  },
  bookmark: [],
};

const [INITIALIZE, INITIALIZE_SUCCESS, INITIALIZE_FAILURE] =
  createRequestActionTypes('setting/INITIALIZE');
const SETTING_RESET = 'setting/SETTING_RESET';
const SETTING_INITIALIZE = 'setting/SETTING_INITIALIZE';
const ADD_BOOKMARK = 'setting/ADD_BOOKMARK';
const DELETE_BOOKMARK = 'setting/DELETE_BOOKMARK';

export const {
  setting: {
    initialize,
    settingReset,
    settingInitialize,
    addBookmark,
    deleteBookmark,
  },
} = createActions({
  [INITIALIZE]: () => {},
  [SETTING_RESET]: () => {},
  [SETTING_INITIALIZE]: value => value,
  [ADD_BOOKMARK]: idsk => idsk,
  [DELETE_BOOKMARK]: idsk => idsk,
});

const initializeSaga = createRequestSaga(
  INITIALIZE,
  SettingAPI.getConfig,
  async () => await storageManager.get('storage'),
  async () => await storageManager.get('bookmark'),
);

export function* settingSaga() {
  yield takeLatest(INITIALIZE, initializeSaga);
}

const setting = handleActions(
  {
    [INITIALIZE_SUCCESS]: (state, {payload: [config, storages, bookmark]}) => {
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
        draft.bookmark = bookmark || initialState.bookmark;
      });
    },
    [INITIALIZE_FAILURE]: (state, {payload}) => {
      return produce(state, draft => {
        draft.error = payload.message;
      });
    },
    [SETTING_RESET]: state => {
      return produce(state, draft => {
        draft.isInitialized = false;
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
    [ADD_BOOKMARK]: (state, {payload}) => {
      return produce(state, draft => {
        draft.bookmark = [...state.bookmark, payload];
      });
    },
    [DELETE_BOOKMARK]: (state, {payload}) => {
      return produce(state, draft => {
        draft.bookmark = state.bookmark.filter(item => item !== payload);
      });
    },
  },
  initialState,
);

export default setting;
