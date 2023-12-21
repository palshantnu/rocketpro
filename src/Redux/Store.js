import {createStore} from 'redux';
import {RootReducer} from './RootReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

const persistConfig = {
  key: 'state',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, RootReducer);

export default () => {
  let store = createStore(persistedReducer);
  let persistor = persistStore(store);
  return {store, persistor};
};