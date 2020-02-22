import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import team from './team/sagas';

export default function* rootSaga() {
  return yield all([auth, team]);
}
