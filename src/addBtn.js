import React from "react";
import { useDispatch } from "react-redux";
import { incrementCounter } from "./counterSlice.js";

export const AddBtn = () => {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(incrementCounter())}>+</button>;
};
