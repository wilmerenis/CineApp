import actions from './actions'

const initialState = {
  profile: null,
  idToken: null,
  fetching: false,
  fetched: false,
  error: null
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case actions.LOGIN_REQUEST:
    return { ...state, fetching: true }
  case actions.LOGIN_SUCCESS:
    return { ...state, fetching: false, fetched: true }
  case actions.LOGOUT:
    return initialState
  default:
    return state
  }
}
