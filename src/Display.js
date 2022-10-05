import React from "react";
import { useSelector } from "react-redux";

export const Display = () => {
  const { counterTest } = useSelector((state) => state.counterTest);
  //   console.log(counter);
  return <div>{counterTest}</div>;
};
