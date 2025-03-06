import { configureStore } from '@reduxjs/toolkit';
import productReducer, {
  loadFromAsyncStorage,
  setProducts,
} from '@/entities/product/model/product-slice';
import filterReducer from '@/features/filter-product/model/filter-slice';
import sortReducer from '@/features/sort-product/model/sort-slice';
import searchReducer from '@/features/search-product/model/search-slice';
import shoppingListReducer from '@/entities/shopping-list/model/slice';
import userReducer from 'entities/user/model/user-slice';

export const store = configureStore({
  reducer: {
    product: productReducer,
    filter: filterReducer,
    sort: sortReducer,
    search: searchReducer,
    user: userReducer,
    shoppingList: shoppingListReducer,
  },
});

const initializeState = async () => {
  const products = await loadFromAsyncStorage();
  store.dispatch(setProducts(products));
};

initializeState();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
