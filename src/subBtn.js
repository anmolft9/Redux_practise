import React from "react";
import { useDispatch } from "react-redux";
import { decrementCounter } from "./counterSlice.js";

export const SubBtn = () => {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(decrementCounter())}>-</button>;
};
