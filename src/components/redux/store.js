import { configureStore } from '@reduxjs/toolkit';
import { advertsReducer } from './advert/advert-slice';

export const store = configureStore({
  reducer: {
    advers: advertsReducer,
  },
});
