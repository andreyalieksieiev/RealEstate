import { all } from 'redux-saga/effects';
import watchAuth from './auth/sagas';
import watchUser from './user/sagas';

export function* rootSaga() {
  yield all([
    watchAuth(),
    watchUser(),
  ]);
}