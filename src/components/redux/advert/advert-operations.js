import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65a90ddb219bfa3718684fc0.mockapi.io';

export const serviceAdverts = createAsyncThunk(
  'adverts/serviceAll',
  async ({ page = 1, limit = 12 }, thunkAPI) => {
    try {
      const { data } = await axios.get(`/adverts?page=${page}&limit=${limit}`);
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
