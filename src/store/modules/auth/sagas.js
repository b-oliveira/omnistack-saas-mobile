import { call, all, put, takeLatest } from 'redux-saga/effects';

import api from '~/services/api';
import navigation from '~/services/navigation';

import { signInSuccess, signFailure } from './actions';

export function setToken(token) {
  if (token) api.defaults.headers.Authorization = `Bearer ${token}`;
}

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token } = response.data;

    setToken(token);

    yield put(signInSuccess(token));

    navigation.navigate('Main');
  } catch (err) {
    yield put(signFailure());
  }
}

export default all([
  takeLatest('persist/REHYDRATE', ({ payload }) => {
    if (payload) {
      const { token } = payload.auth;

      setToken(token);
    }
  }),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
]);
