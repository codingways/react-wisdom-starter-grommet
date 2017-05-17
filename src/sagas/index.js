import { takeLatest, all } from 'redux-saga/effects'
import API from '../services/Api'

/* ------------- Types ------------- */

import { AccountTypes } from '../redux/AccountRedux'

/* ------------- Sagas ------------- */

import { loginRequest, logout } from './AccountSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    // some sagas only receive an action
    takeLatest(AccountTypes.LOGIN_REQUEST, loginRequest, api),
    takeLatest(AccountTypes.RESET, logout, api)
  ])
}
