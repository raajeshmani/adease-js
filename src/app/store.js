import { configureStore } from '@reduxjs/toolkit';
import advertisementReducer from '../features/advertisement/advertisementSlice';
import sortComponentReducer from '../components/Sort/SortComponentSlice';

export const store = configureStore({
  reducer: {
    advertisement: advertisementReducer,
    sort: sortComponentReducer,
  },
});
