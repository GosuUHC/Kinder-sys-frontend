import { createSlice } from "@reduxjs/toolkit";

const authInitialState = {
  login: "",
  password: "",
  role: "",
};

const auth = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    setLogin: (state, action) => {
      state.login = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setRole: (state, action) => {
      state.role = action.payload;
    },
  },
});

export const { setLogin, setPassword, setRole } = auth.actions;

export const authReducer = auth.reducer;
