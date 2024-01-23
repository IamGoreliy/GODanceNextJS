import { createSlice } from '@reduxjs/toolkit';
import {singInAction, checkVerification} from './operation';


const userAuthSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    isLoading: false,
    user: null,
    token: null,
    error: null,
    logout: false,
  },
  reducers: {
      logout(state) {
        state.isAuthenticated = false;
        state.isLoading = false;
        state.user = null;
        state.token = null;
        state.error = null;
        state.logout = true;
      }
  },
  extraReducers: builder =>
    builder
      .addCase(singInAction.pending, state => {
        state.isAuthenticated = false;
        state.isLoading = true;
        state.user = null;
        state.token = null;
        state.error = null;
        state.logout = false;
    })
      .addCase(singInAction.fulfilled, (state, action) => {
        state.isAuthenticated = true
        state.isLoading = false;
        state.user = action.payload.userData;
        state.token = action.payload.token;
        state.error = null;
        state.logout = false;
        window.sessionStorage.setItem('auth', JSON.stringify({isAuth: true, token: state.token}));
      })
      .addCase(singInAction.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.isLoading = false;
        state.user = null;
        state.token = null;
        state.error = action.payload;
        state.logout = false;
      })
      .addCase(checkVerification.pending, state => {
        state.isAuthenticated = false;
        state.isLoading = true;
        state.user = null;
        state.token = null;
        state.error = null;
        state.logout = false;
      })
      .addCase(checkVerification.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.isLoading = false;
        state.user = action.payload.userData;
        state.token = action.payload.token;
        state.error = null;
        state.logout = false;
      })
      .addCase(checkVerification.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.isLoading = false;
        state.user = null;
        state.token = null;
        state.error = action.payload;
        state.logout = false;
      })

})

export const userAuthReducer = userAuthSlice.reducer;

export const {logout} = userAuthSlice.actions;