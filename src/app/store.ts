import { configureStore } from '@reduxjs/toolkit';
import productReducer, { loadProducts, setProducts } from '@/entities/product/model/product-slice';
import filterReducer from '@/features/filter-product/model/filter-slice';
import sortReducer from '@/features/sort-product/model/sort-slice';
import searchReducer from '@/features/search-product/model/search-slice';
import userReducer, { initUser } from 'entities/user/model/user-slice';
import { copyDatabaseToDocuments, initDatabase } from '@/shared/lib/db';

export const store = configureStore({
  reducer: {
    product: productReducer,
    filter: filterReducer,
    sort: sortReducer,
    search: searchReducer,
    user: userReducer,
  },
});

const initializeState = async () => {
  try {
    await initDatabase();
    const user = await store.dispatch(initUser()); // Получаем результат напрямую
    if (user) {
      await store.dispatch(loadProducts(user.id));
      await copyDatabaseToDocuments(); // Копируем базу при запуске
    }
  } catch (error) {
    console.error('Failed to initialize state:', error);
  }
};

initializeState();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
