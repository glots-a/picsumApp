import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import {setupListeners} from '@reduxjs/toolkit/query';
import AsyncStorage from '@react-native-async-storage/async-storage';

import userReducer from './userSlice';
import {userApi} from './api/userApi';

const rootReducer = combineReducers({
  user: userReducer,
  [userApi.reducerPath]: userApi.reducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(userApi.middleware),
});

export const persitor = persistStore(store);
setupListeners(store.dispatch);
