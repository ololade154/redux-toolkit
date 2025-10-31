import { createSlice } from '@reduxjs/toolkit';
//state
const initialState = {
  count: 0,
};
//reducer function
export const CounterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count = count + 1;
    },
    decrement: (state) => {
      state.count = count - 1;
    },
  },
});
