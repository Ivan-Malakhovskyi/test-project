import { createSlice } from '@reduxjs/toolkit';
import { serviceCar } from './advert-operations';

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: {
    cars: [],
    isLoading: false,
    isError: null,
  },
  extraReducers: builder => {
    builder.addCase(serviceCar.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(serviceCar.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.cars = action.payload;
    });
    builder.addCase(serviceCar.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    });
  },
});

export const advertsReducer = advertsSlice.reducer;
