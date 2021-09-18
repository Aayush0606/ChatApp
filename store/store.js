import { configureStore } from "@reduxjs/toolkit";
import loggedReducer from "./features/loggedReducer";

export const store = configureStore({
  reducer: {
    checkLogin: loggedReducer,
  },
});
