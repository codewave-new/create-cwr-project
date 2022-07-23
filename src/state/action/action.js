/**
 * Global Action File
 */

import { start } from '../slices/appSlice';

export const appInit = (value) => (dispatch) => dispatch(start(value));
