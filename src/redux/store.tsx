import { configureStore, createAction } from "@reduxjs/toolkit";
import { timer } from "./counterReducer";
import rootReducer from "./rootReducer";

export const store = configureStore({
  reducer: rootReducer,
  middleware: [timer],
});

