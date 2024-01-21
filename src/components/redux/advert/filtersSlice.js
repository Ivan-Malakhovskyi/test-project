import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: '',
  reducers: {
    searchValueFilter: (_, action) => {
      return action.payload;
    },
  },
});

export const { searchValueFilter } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
