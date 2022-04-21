import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { logger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { encryptTransform } from 'redux-persist-transform-encrypt';
import { RootReducers } from '../reducer';

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

const composeEnhancers = composeWithDevTools({ trace: true });

const Store = createStore(
  persistedReducer,
  process.env.NODE_ENV === 'development'
    ? composeEnhancers(applyMiddleware(thunk, logger))
    : applyMiddleware(thunk, logger)
);

const persistor = persistStore(Store);

export { Store, persistor };
