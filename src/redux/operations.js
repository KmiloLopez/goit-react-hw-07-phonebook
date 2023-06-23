import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://649389810da866a953668048.mockapi.io/contacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const data = await fetch(`${BASE_URL}/contacts`);
      const response = await data.json();
      return response;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addcontact',
  async (contactInfo, thunkAPI) => {
    try {
      const data = await fetch(`${BASE_URL}/contacts`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          name: contactInfo.nameInfo,
          phone: contactInfo.phoneInfo,
          created_at: new Date().toISOString(),
        }),
      });
      const response = await data.json();
      return response;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deletecontact',
  async (idToDelete, thunkAPI) => {
    try {
      const data = await fetch(`${BASE_URL}/contacts/${idToDelete}`, {
        method: 'DELETE',
      });
      const response = await data.json();
      return response;
    } catch (e) {
      thunkAPI.rejectWithValue(e.message);
    }
  }
);
