import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementCounter: (state, payload) => {
      state.counter = state.counter + 1;
    },
    decrementCounter: (state, payload) => {
      state.counter = state.counter - 1;
    },
  },
});

const { reducer, actions } = counterSlice;
export const { incrementCounter, decrementCounter } = actions;

export default reducer;
