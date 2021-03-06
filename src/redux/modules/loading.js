import {createActions, handleActions} from 'redux-actions';

const initialState = {};

const START_LOADING = 'loading/START_LOADING';
const FINISH_LOADING = 'loading/FINISH_LOADING';

export const {
  loading: {startLoading, finishLoading},
} = createActions({
  [START_LOADING]: requestType => requestType,
  [FINISH_LOADING]: requestType => requestType,
});

const loading = handleActions(
  {
    [START_LOADING]: (state, action) => ({
      ...state,
      [action.payload]: true,
    }),
    [FINISH_LOADING]: (state, action) => ({
      ...state,
      [action.payload]: false,
    }),
  },
  initialState,
);

export default loading;
