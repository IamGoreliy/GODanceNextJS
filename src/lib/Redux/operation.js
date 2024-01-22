import {createAsyncThunk} from '@reduxjs/toolkit';
import {methodGetPost} from '../../utils/customFetch';

export const singInAction = createAsyncThunk(
  'auth/singIn',
  async (data, thunkAPI) => {
    const URL = 'http://localhost:3000/api/authCheck';
    const methodSend = 'POST';
    try{
      const response = await methodGetPost(URL, methodSend, data);
      // console.log('response in operation ',response);
      return response;
    }catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const checkVerification = createAsyncThunk(
  'auth/verification',
  async (data, thunkAPI) => {
    const URL = 'http://localhost:3000/api/verification';
    const methodSend = 'POST';
    try {
      const response = await methodGetPost(URL, methodSend, data);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
)

//нужно написать функцию которая будет заходить в бузу и оставлять отметку что сессия завершина (если такое возможно) --- скоре всего нет так как у нас сессия тяжело будет контролировать сам ли ты вышел из сесси или закрытие браузера закрыло сессию на сервере не будет понятно.

export const logout = createAsyncThunk(
  'auth/logout',
  async (data, thunkAPI) => {

  }
)