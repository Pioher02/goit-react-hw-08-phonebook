import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://connections-api.herokuapp.com/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (token, thunkAPI) => {
    try {
      const response = await fetch(`${BASE_URL}contacts`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      });
      const data = await response.json();
      return data;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (text, thunkAPI) => {
    try {
      const data = await fetch(`${BASE_URL}contacts`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          Authorization: text.token,
        },

        body: JSON.stringify({ name: text.name, number: text.number }),
      });
      const response = await data.json();

      return response;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (text, thunkAPI) => {
    try {
      await fetch(`${BASE_URL}contacts/${text.id}`, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json',
          Authorization: text.token,
        },
      });
      return text.id;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);
