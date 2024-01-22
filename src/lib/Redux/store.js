import {configureStore} from '@reduxjs/toolkit';
import {userAuthReducer} from './userAuth';

export const store = configureStore({
  reducer: {
    authStore: userAuthReducer,
  }
})