import { combineReducers } from 'redux';
import appSlice from './appSlice';

export const RootReducers = combineReducers({ app: appSlice });
