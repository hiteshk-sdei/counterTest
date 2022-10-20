import type { Dispatch } from "redux";
import { createAction } from "@reduxjs/toolkit";
import { IAction } from "../interface";

// import { Store } from "redux";
export const increment = createAction("increment");
export const decrement = createAction("decrement");

// auto increment and decrement
export const counter = (s = 0, action: IAction) =>
  increment.match(action) ? s + 1 : decrement.match(action) ? s - 1 : s;

// auto increment and decrement with decided time
export const timer = ({ dispatch }: { dispatch: Dispatch }) => {
  let secound: number = 0;
  const interval = setInterval(() => {
    secound = secound + 1;
    dispatch(increment());
    if (secound == 10) {
      clearInterval(interval);
    }
  }, 1000);

  return (next: Dispatch<IAction>) => (action: IAction) => {
    next(action);
  };
};
