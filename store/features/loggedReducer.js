import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const changeSlice = createSlice({
  name: "isLogged",
  initialState,
  reducers: {
    loggin: (state, action) => {
      state.value = true;
    },
    logout: (state, action) => {
      state.value = false;
    },
  },
});

export const { loggin, logout } = changeSlice.actions;

export default changeSlice.reducer;
