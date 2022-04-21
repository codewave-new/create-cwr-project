import { ActionTypes } from '../action';

const initialState = {
  loaded: false,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.APP_START:
      return { ...state, loaded: action.payload };

    default:
      return { ...state };
  }
};
