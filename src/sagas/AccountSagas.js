import { put } from 'redux-saga/effects'
import AccountActions from '../redux/AccountRedux'

export function * loginRequest (api, action) {
  const { email } = action

  // Replace with custom logic
  yield put(AccountActions.loginSuccess({email}))
}

export function * logout (api, action) {

}
