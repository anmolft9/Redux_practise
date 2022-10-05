import { configureStore } from "@reduxjs/toolkit";
import Reducer from "./counterSlice.js";

const store = configureStore({
  reducer: {
    counterTest: Reducer,
  },
});

export default store;
