import { createReducer, createActions } from 'reduxsauce'

import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  loginRequest: ['email'],
  loginSuccess: ['user'],
  loginFailure: ['errors'],
  reset: null,
})

export const AccountTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  user: null,
  errors: [],
  fetching: false
})

/* ------------- Reducers ------------- */

export const loginRequest = (state: Object) =>
  state.merge({
    fetching: true,
    errors: []  
  })

export const loginSuccess = (state: Object, {user}: Object) => 
  state.merge({
    user,
    fetching: false
  })

export const loginFailure = (state: Object, { errors }: Object) =>
  state.merge({
    fetching: false,
    errors
  })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_REQUEST]: loginRequest,
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.LOGIN_FAILURE]: loginFailure,
})

/* ------------- Selectors ------------- */