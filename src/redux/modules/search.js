import {createActions, handleActions} from 'redux-actions';
import produce from 'immer';

const initialState = {
  keyword: '',
};

const SETTING_KEYWORD = 'search/SETTING_KEYWORD';

export const {
  search: {settingKeyword},
} = createActions({
  [SETTING_KEYWORD]: keyword => keyword,
});

const search = handleActions(
  {
    [SETTING_KEYWORD]: (state, {payload}) => {
      return produce(state, draft => {
        draft.keyword = payload;
      });
    },
  },
  initialState,
);

export default search;
