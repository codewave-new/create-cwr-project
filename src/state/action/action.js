/**
 * Global Action File
 */

import * as ActionTypes from './actionTypes';

export const appInit = (value) => (dispatch) =>
  dispatch({ type: ActionTypes.APP_START, payload: value });
