import { persistStore } from 'redux-persist'
import { asyncLocalStorage } from 'redux-persist/storages'
import ReduxPersist from '../config/ReduxPersist'

const updateReducers = (store: Object) => {
  const reducerVersion = ReduxPersist.reducerVersion
  const config = ReduxPersist.storeConfig
  const log = () => {}
  // Check to ensure latest reducer version
  asyncLocalStorage.getItem('reducerVersion').then((localVersion) => {
    if (localVersion !== reducerVersion) {
      console.log(`PURGE state - oldVersion: ${localVersion} - newVersion: ${reducerVersion}`)
      // Purge store
      persistStore(store, config, log).purge()
      asyncLocalStorage.setItem('reducerVersion', reducerVersion)
    } else {
      persistStore(store, config, log)
    }
  }).catch(() => {
    persistStore(store, config, log)
    asyncLocalStorage.setItem('reducerVersion', reducerVersion)
  })
}

export default {updateReducers}
