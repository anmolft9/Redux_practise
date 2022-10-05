import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counterTest: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementCounter: (state) => {
      state.counterTest = state.counterTest + 1;
    },
    decrementCounter: (state) => {
      state.counterTest = state.counterTest - 1;
    },
  },
});

const { reducer, actions } = counterSlice;
export const { incrementCounter, decrementCounter } = actions;

export default reducer;
