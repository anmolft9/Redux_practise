import { configureStore } from "@reduxjs/toolkit";
import Reducer from "./counterSlice.js";

const store = configureStore({
  reducer: {
    counter: Reducer,
  },
});

export default store;
