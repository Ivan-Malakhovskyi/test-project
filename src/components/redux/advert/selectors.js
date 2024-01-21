import { createSelector } from '@reduxjs/toolkit';

export const selectAdverts = state => state.adverts.cars;

export const selectFavoritesAdverts = state => state.adverts.favorites;

export const selectIsLoading = state => state.adverts.isLoading;

export const selectFilters = state => state.filters;

export const selectFiltersValue = createSelector(
  [selectAdverts, selectFilters],
  (adverts, filters) => {
    return adverts.filter(advert =>
      advert.make.toLowerCase().includes(filters.toLowerCase())
    );
  }
);
