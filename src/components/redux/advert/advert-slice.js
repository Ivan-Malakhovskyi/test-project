import { createSlice } from '@reduxjs/toolkit';
import { serviceAdverts } from './advert-operations';

const initialState = {
  cars: [],
  favorites: [],
  isLoading: false,
  isFavorite: false,
  isError: null,
};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState,
  reducers: {
    addAdvert: {
      reducer(state, action) {
        state.favorites.push(action.payload);
      },
    },
    deleteAdvert: {
      reducer(state, action) {
        state.favorites = state.favorites.filter(
          car => car.id !== action.payload.id
        );
      },
    },
  },
  extraReducers: builder => {
    builder.addCase(serviceAdverts.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(serviceAdverts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.cars = [...state.cars, ...action.payload];
    });
    builder.addCase(serviceAdverts.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    });
  },
});

export const { addAdvert, deleteAdvert } = advertsSlice.actions;
export const advertsReducer = advertsSlice.reducer;
