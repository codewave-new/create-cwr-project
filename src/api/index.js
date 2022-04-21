/**
 * Global API file for all API calls
 */

import Axios from './api';

export const callSomeAPI = async () => {
  try {
    const response = await Axios.get('/some_route');
    return response.data;
  } catch (error) {
    return error;
  }
};
