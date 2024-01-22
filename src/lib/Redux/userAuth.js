import { createSlice } from '@reduxjs/toolkit';
import {singInAction, checkVerification} from './operation';


const userAuth = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    isLoading: false,
    user: null,
    token: null,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(singInAction.pending, state => {
        state.isAuthenticated = false;
        state.isLoading = true;
        state.user = null;
        state.token = null;
        state.error = null;
    })
      .addCase(singInAction.fulfilled, (state, action) => {
        state.isAuthenticated = true
        state.isLoading = false;
        state.user = action.payload.userData;
        state.token = action.payload.token;
        state.error = null;
        window.sessionStorage.setItem('auth', JSON.stringify({isAuth: true, token: state.token}));
      })
      .addCase(singInAction.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.isLoading = false;
        state.user = null;
        state.token = null;
        state.error = action.payload;
      })
      .addCase(checkVerification.pending, state => {
        state.isAuthenticated = false;
        state.isLoading = true;
        state.user = null;
        state.token = null;
        state.error = null;
      })
      .addCase(checkVerification.fulfilled, (state, action) => {
        state.isAuthenticated = true
        state.isLoading = false;
        state.user = action.payload.userData;
        state.token = action.payload.token;
        state.error = null;
      })
      .addCase(checkVerification.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.isLoading = false;
        state.user = null;
        state.token = null;
        state.error = action.payload;
      })
})

export const userAuthReducer = userAuth.reducer;