import { createSlice } from '@reduxjs/toolkit';
import { serviceAdverts } from './advert-operations';

const initialState = {
  cars: [],
  isLoading: false,
  isError: null,
  page: 1,
};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState,
  extraReducers: builder => {
    builder.addCase(serviceAdverts.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(serviceAdverts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.cars = [...action.payload];
    });
    builder.addCase(serviceAdverts.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    });
  },
});

export const advertsReducer = advertsSlice.reducer;
