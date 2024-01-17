import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const serviceCar = createAsyncThunk(
  'car/serviceAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/advert');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
