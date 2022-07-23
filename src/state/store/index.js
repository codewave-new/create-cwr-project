import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { encryptTransform } from 'redux-persist-transform-encrypt';
import { RootReducers } from '../slices';

export const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['login', 'userDetails'],
  transforms: [
    encryptTransform({
      secretKey: 'my-super-secret-key',
      onError: () => {
        /**
         * If you want to handle
         * error put error inside brackets
         * (error) => {...}
         */
      },
    }),
  ],
};

const persistedReducer = persistReducer(persistConfig, RootReducers);

const Store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: process.env.NODE_ENV !== 'production' ? [thunk, logger] : [thunk],
});

const persistor = persistStore(Store);

export { Store, persistor };
