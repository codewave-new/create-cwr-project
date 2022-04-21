import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { logger } from 'redux-logger';
import { RootReducers } from '../reducer';

const composeEnhancers = composeWithDevTools({ trace: true });

export const Store = createStore(
  RootReducers,
  process.env.NODE_ENV === 'development'
    ? composeEnhancers(applyMiddleware(thunk, logger))
    : applyMiddleware(thunk, logger)
);
