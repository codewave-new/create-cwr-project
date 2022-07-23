import { createSlice } from '@reduxjs/toolkit';

const initialState = { loaded: false };

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    start: (state, action) => {
      return { ...state, loaded: action.payload };
    },
  },
});

export const { start } = appSlice.actions;
export default appSlice.reducer;
