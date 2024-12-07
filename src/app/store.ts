import { configureStore } from '@reduxjs/toolkit';
import productReducer from '@/entities/product/model/product-slice';
import filterReducer from '@/features/filter-product/model/filter-slice';
import sortReducer from '@/features/sort-product/model/sort-slice';
import searchReducer from '@/features/search-product/model/search-slice';

export const store = configureStore({
  reducer: {
    product: productReducer,
    filter: filterReducer,
    sort: sortReducer,
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
