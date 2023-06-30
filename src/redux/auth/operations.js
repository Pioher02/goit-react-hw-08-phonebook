import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://connections-api.herokuapp.com/';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await fetch(`${BASE_URL}users/signup`, {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();

      if (!response.ok) {
        if (data.name === 'MongoError' && data.code === 11000) {
          throw new Error('This email already exist');
        } else {
          throw new Error('Check the information');
        }
      }

      return data;
    } catch (error) {
      if (error instanceof TypeError || error instanceof SyntaxError) {
        return thunkAPI.rejectWithValue(
          'Ups!! Something it´s wrong, try later'
        );
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await fetch(`${BASE_URL}users/login`, {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error('Verify the information');
      }
      return data;
    } catch (error) {
      if (error instanceof TypeError || error instanceof SyntaxError) {
        return thunkAPI.rejectWithValue(
          'Ups!! Something it´s wrong, try later'
        );
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
