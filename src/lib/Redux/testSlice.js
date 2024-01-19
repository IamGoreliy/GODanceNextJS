import { createSlice } from '@reduxjs/toolkit';

const testSlice = createSlice({
  name: 'test',
  initialState: {
    id: 0,
    name: 'sergey',
    email: 'test@mail.com',
    pass: '12345'
  }
})

export const testReducer = testSlice.reducer;