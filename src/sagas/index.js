import { call, all } from 'redux-saga/effects';

import bioLifeSaga from './bioLifeSaga';

export default function* watchSagas() {
  yield all([call(bioLifeSaga)]);
}
