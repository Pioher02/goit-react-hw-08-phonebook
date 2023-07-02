import { createSlice } from '@reduxjs/toolkit';
import {register, login} from "./operations";

const authInitialState = {
  user: { name: null, email: null },
  token: null,
  isLoading: false,
  isLoggedIn: false,
  error: null,
  formError: null,
};

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    setFormError(state, { payload }) {
      state.formError = payload;
    },
    clearFormError(state) {
      state.formError = null;
    },
    clearError(state) {
      state.error = null;
    },
    userLogout(state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
  },
  extraReducers: {
    [register.pending]: handlePending,
    [register.rejected]: handleRejected,
    [register.fulfilled](state, { payload }) {
      const { name, email } = payload.user;
      state.user = { name, email };
      state.token = payload.accessToken;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
      console.log(payload);
      console.log(payload.user);
      console.log(payload.token);
    },
    [login.pending]: handlePending,
    [login.rejected]: handleRejected,
    [login.fulfilled](state, { payload }) {
      const { name, email } = payload.user;
      state.user = { name, email };
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    },
  },
});

export const { clearError, clearFormError, setFormError, userLogout } = authSlice.actions;
export const authReducer = authSlice.reducer;