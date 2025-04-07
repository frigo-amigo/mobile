import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@/shared/types/product';
import { RootState } from '@/app/store';
import {
  addProductApi,
  deleteProductApi,
  fetchProductsApi,
  updateProductApi,
} from './product-service';

interface ProductState {
  items: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  items: [],
  loading: false,
  error: null,
};

// Загрузка продуктов
export const fetchProducts = createAsyncThunk(
  'product/fetchProducts',
  async (userId: string, { getState, rejectWithValue }) => {
    try {
      const state = getState() as RootState;
      const token = state.auth.token;
      if (!token) {
        throw new Error('Токен не найден');
      }
      const response = await fetchProductsApi(userId, token);
      return response.products;
    } catch (err: any) {
      console.error('Ошибка загрузки продуктов:', err);
      return rejectWithValue(err.message || 'Ошибка загрузки продуктов');
    }
  },
);

// Добавление продукта
export const addProduct = createAsyncThunk(
  'product/addProduct',
  async (
    { product, userId }: { product: Product; userId: string },
    { getState, rejectWithValue },
  ) => {
    try {
      const state = getState() as RootState;
      const token = state.auth.token;
      if (!token) {
        throw new Error('Токен не найден');
      }
      const newProduct = await addProductApi(product, token);
      return newProduct;
    } catch (err: any) {
      console.error('Ошибка в addProduct:', err);
      return rejectWithValue(err.message || 'Ошибка добавления продукта');
    }
  },
);

// Обновление продукта
export const editProduct = createAsyncThunk(
  'product/editProduct',
  async (
    { product, userId }: { product: Product & { updatedFields?: string[] }; userId: string },
    { getState, rejectWithValue },
  ) => {
    try {
      const state = getState() as RootState;
      const token = state.auth.token;
      if (!token) throw new Error('Токен не найден');
      if (!product.id) throw new Error('ID продукта обязателен для обновления');
      const updatedProduct = await updateProductApi(product, token);
      console.log('editProduct: Обновлённый продукт:', updatedProduct);
      return updatedProduct;
    } catch (err: any) {
      console.error('Ошибка в editProduct:', err);
      return rejectWithValue(err.message || 'Ошибка обновления продукта');
    }
  },
);

// Удаление продукта
export const deleteProduct = createAsyncThunk(
  'product/deleteProduct',
  async (
    { productId, userId }: { productId: string; userId: string },
    { getState, rejectWithValue },
  ) => {
    try {
      const state = getState() as RootState;
      const token = state.auth.token;
      if (!token) throw new Error('Токен не найден');
      await deleteProductApi(productId, token);
      console.log('deleteProduct: Продукт удалён:', productId);
      return { productId };
    } catch (err: any) {
      console.error('Ошибка в deleteProduct:', err.response?.data || err.message);
      return rejectWithValue(err.message || 'Ошибка удаления продукта');
    }
  },
);

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch Products
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Add Product
      .addCase(addProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addProduct.fulfilled, (state, action: PayloadAction<Product>) => {
        state.items.push(action.payload);
        state.loading = false;
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Edit Product
      .addCase(editProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editProduct.fulfilled, (state, action: PayloadAction<Product>) => {
        const index = state.items.findIndex((p) => p.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
        state.loading = false;
      })
      .addCase(editProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Delete Product
      .addCase(deleteProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteProduct.fulfilled, (state, action: PayloadAction<{ productId: string }>) => {
        state.items = state.items.filter((p) => p.id !== action.payload.productId);
        state.loading = false;
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
