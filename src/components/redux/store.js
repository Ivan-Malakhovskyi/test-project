import { configureStore } from '@reduxjs/toolkit';
import { advertsReducer } from './advert/advert-slice';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import { FLUSH, PAUSE, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';
import { filtersReducer } from './advert/filtersSlice';

const advertPersistConfig = {
  key: 'adverts',
  storage,
  whitelist: ['favorites'],
};

export const store = configureStore({
  reducer: {
    adverts: persistReducer(advertPersistConfig, advertsReducer),
    filters: filtersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
