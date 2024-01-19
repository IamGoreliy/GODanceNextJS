import {configureStore} from '@reduxjs/toolkit';
import {testReducer} from './testSlice';

export const store = configureStore({
  reducer: {
    testStore: testReducer,
  }
})