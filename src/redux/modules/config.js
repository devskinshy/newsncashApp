import {createActions, handleActions} from 'redux-actions';
import produce from 'immer';
import {takeLatest} from 'redux-saga/effects';
import createRequestSaga, {
  createRequestActionTypes,
} from '../createRequestSaga';
import storageManager from '../../utils/storageManager';
import * as ConfigAPI from '../../api/config';

const initialState = {
  init: false,
  isInitialized: false,
  gnb: {},
  oid: {},
  gender: '',
  age: '',
  oid_list: [],
  bookmark: [],
  error: null,
};

export const [INITIALIZE, INITIALIZE_SUCCESS, INITIALIZE_FAILURE] =
  createRequestActionTypes('config/INITIALIZE');
const SETTING_STORAGE = 'config/SETTING_STORAGE';
const [DONE_STORAGE, DONE_STORAGE_SUCCESS, DONE_STORAGE_FAILURE] =
  createRequestActionTypes('config/DONE_STORAGE');
const [CHANGE_BOOKMARK, CHANGE_BOOKMARK_SUCCESS, CHANGE_BOOKMARK_FAILURE] =
  createRequestActionTypes('config/CHANGE_BOOKMARK');
const RESET_STORAGE = 'config/RESET_STORAGE';

export const {
  config: {
    initialize,
    settingStorage,
    doneStorage,
    changeBookmark,
    resetStorage,
  },
} = createActions({
  [INITIALIZE]: () => {},
  [SETTING_STORAGE]: (key, value) => ({key, value}),
  [DONE_STORAGE]: storage => storage,
  [CHANGE_BOOKMARK]: newBookmark => newBookmark,
  [RESET_STORAGE]: () => {},
});

const initializeSaga = createRequestSaga(
  INITIALIZE,
  ConfigAPI.getConfig,
  async () => await storageManager.get('storage'),
  async () => await storageManager.get('bookmark'),
);

const doneStorageSaga = createRequestSaga(
  DONE_STORAGE,
  async storage => await storageManager.set('storage', storage),
);

const changeBookmarkSaga = createRequestSaga(
  CHANGE_BOOKMARK,
  async newBookmark => {
    await storageManager.set('bookmark', newBookmark);
    return newBookmark;
  },
);

export function* configSaga() {
  yield takeLatest(INITIALIZE, initializeSaga);
  yield takeLatest(DONE_STORAGE, doneStorageSaga);
  yield takeLatest(CHANGE_BOOKMARK, changeBookmarkSaga);
}

const config = handleActions(
  {
    [INITIALIZE_SUCCESS]: (state, {payload: [config, storage, bookmark]}) => {
      return produce(state, draft => {
        draft.init = true;
        draft.isInitialized = !!storage;
        draft.gnb = config.gnb;
        draft.oid = config.oid;
        draft.gender = storage?.gender || initialState.gender;
        draft.age = storage?.age || initialState.age;
        draft.oid_list = storage?.oid_list || initialState.oid_list;
        draft.bookmark = bookmark || initialState.bookmark;
      });
    },
    [INITIALIZE_FAILURE]: (state, {payload: error}) => {
      return produce(state, draft => {
        draft.init = true;
        draft.error = error;
      });
    },
    [SETTING_STORAGE]: (state, {payload: {key, value}}) => {
      return produce(state, draft => {
        draft[key] = value;
      });
    },
    [DONE_STORAGE_SUCCESS]: state => {
      return produce(state, draft => {
        draft.isInitialized = true;
      });
    },
    [DONE_STORAGE_FAILURE]: (state, {payload: error}) => {
      return produce(state, draft => {
        draft.error = error;
      });
    },
    [CHANGE_BOOKMARK_SUCCESS]: (state, {payload: [newBookmark]}) => {
      return produce(state, draft => {
        draft.bookmark = newBookmark;
      });
    },
    [CHANGE_BOOKMARK_FAILURE]: (state, {payload: error}) => {
      return produce(state, draft => {
        draft.error = error;
      });
    },
    [RESET_STORAGE]: state => {
      return produce(state, draft => {
        draft.isInitialized = false;
      });
    },
  },
  initialState,
);

export default config;
