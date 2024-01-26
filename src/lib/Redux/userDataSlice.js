import {createSlice} from '@reduxjs/toolkit';
import { checkVerification } from './operation';

const userDataSlice = createSlice({
  name: 'editUser',
  initialState: {
    isLoading: false,
    user: null,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(checkVerification.pending, state => {
        state.isLoading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(checkVerification.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.userData;
        state.error = null;
      })
      .addCase(checkVerification.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.error = action.payload;
      })
})

export const userDataReducer = userDataSlice.reducer;