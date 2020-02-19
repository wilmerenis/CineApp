import { 
  takeLatest, 
  all, put, fork 
} from 'redux-saga/effects'
import actions from './actions'

export function* loginRequest() {
  yield takeLatest(actions.LOGIN_REQUEST, function*({ payload }) {
    const {  } = payload

    if(payload) {
      yield put({
        type: actions.LOGIN_SUCCESS,
        token: null,
        profile: null
      })
    } else {
      yield put({ type: actions.LOGIN_ERROR })
    }
  })
}

export function* loginSuccess() {
  yield takeLatest(actions.LOGIN_SUCCESS, function*(payload) {
    /// ACTIONS
  })
}

export function* loginError() {
  yield takeLatest(actions.LOGIN_ERROR, function*() {
    /// ACTIONS
  });
}

export function* logout() {
  yield takeLatest(actions.LOGOUT, function*() {
    /// ACTIONS
  });
}

export function* checkAuthorization() {
  yield takeLatest(actions.CHECK_AUTHORIZATION, function*() {
    const token = null
    if (token) {
      yield put({
        type: actions.LOGIN_SUCCESS,
        token: null,
        profile: 'Profile'
      });
    }
  });
}

export default function* rootSaga() {
  yield all([
    fork(logout),
    fork(loginError),
    fork(loginRequest),
    fork(loginSuccess),
    fork(checkAuthorization),
  ])
}
