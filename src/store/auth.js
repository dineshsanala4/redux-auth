import { createSlice, configureStore } from "@reduxjs/toolkit";
const initialAuthState = { isAuthenticated: false };

//Using Redux Toolkit:
const authSlice = createSlice({
  name: "Auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
