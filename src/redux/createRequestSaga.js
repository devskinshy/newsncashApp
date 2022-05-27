import {createAction} from 'redux-actions';
import {all, call, put} from 'redux-saga/effects';
import {startLoading, finishLoading} from './modules/loading';

export const createRequestActionTypes = type => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return [type, SUCCESS, FAILURE];
};

const createRequestSaga = (type, ...request) => {
  const [ORIGIN, SUCCESS, FAILURE] = createRequestActionTypes(type);

  const successAction = createAction(
    SUCCESS,
    response => response,
    response => response,
  );
  const failureAction = createAction(FAILURE, e => e);

  return function* ({payload}) {
    yield put(startLoading(ORIGIN));

    try {
      // const response = yield call(request, payload);
      const response = yield all(request.map(r => call(r, payload)));
      yield put(successAction(response));
    } catch (e) {
      console.error(e);
      yield put(failureAction(e));
    }

    yield put(finishLoading(ORIGIN));
  };
};

export default createRequestSaga;
