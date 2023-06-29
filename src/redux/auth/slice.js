import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { userName: null, email: null },
  token: null,
  isLoading: false,
  isLoggedIn: false,
  error: null,
  formError: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
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
        state.user = { userName: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      },
  },
});
