import React from "react";
import { useSelector } from "react-redux";

export const Display = () => {
  const { counter } = useSelector((state) => state.counter);
  console.log(counter);
  return <div>{counter}</div>;
};
