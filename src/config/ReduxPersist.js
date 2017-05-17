import { asyncLocalStorage } from 'redux-persist/storages'
import immutablePersistenceTransform from '../services/ImmutablePersistenceTransform'

const REDUX_PERSIST = {
  active: true,
  reducerVersion: '1',
  storeConfig: {
    storage: asyncLocalStorage,
    blacklist: ['account'],
    transforms: [immutablePersistenceTransform]
  }
}

export default REDUX_PERSIST
