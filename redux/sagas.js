import { all } from 'redux-saga/effects'

import authSagas from './Auth/saga'

export default function* rootSaga(getState) {
  yield all([
    authSagas()
  ])
}