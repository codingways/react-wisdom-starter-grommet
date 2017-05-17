import { resettableReducer } from 'reduxsauce'
import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../sagas'

const resettable = resettableReducer('RESET')

export default () => {
  const rootReducer = combineReducers({
    account: resettable(require('./AccountRedux').reducer),
  })

  return configureStore(rootReducer, rootSaga)
}