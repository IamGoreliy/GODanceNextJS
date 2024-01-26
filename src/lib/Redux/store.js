import {configureStore} from '@reduxjs/toolkit';
import {userAuthReducer} from './userAuthSlice';
import {userDataReducer} from './userDataSlice';

export const store = configureStore({
  reducer: {
    authStore: userAuthReducer,
    userDataStore: userDataReducer,
  }
})