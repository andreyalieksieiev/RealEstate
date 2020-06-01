import { call, put, takeLatest } from 'redux-saga/effects';
import UserActions, { GET_USER, UP_DATE_PROFILE } from './actions';

import api, { applyToken } from '../../services/api';

function* getUserSaga(action) {
  try {
    yield call(applyToken, localStorage.getItem('token'));
    const { data } = yield call(api.get, '/profile')
    yield put(UserActions.getUserSuccess(data))
  } catch (err) {
    yield put(UserActions.getUserFail(err.response.data))
  }
}

function* upDateProfileSaga(action) {
  try {
    const { firstName: newFirstName, lastName: newLastName} = action.payload
    const { data } = yield call(api.put, '/profile', { firstName: newFirstName, lastName: newLastName})
    yield put(UserActions.upDateProfileSuccess(data))
  } catch (err) {
    yield put(UserActions.upDateProfileFail(err.response.data))
  }
}

export default function* watchUser() {
  yield takeLatest(GET_USER, getUserSaga)
  yield takeLatest(UP_DATE_PROFILE, upDateProfileSaga)
}
