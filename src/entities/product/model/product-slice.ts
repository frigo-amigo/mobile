import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@/shared/types/product';
import { AppDispatch } from '@/app/store';
import {
  getProducts,
  insertProduct,
  updateProduct,
  deleteProduct as deleteProductDb,
} from '@/shared/lib/db';

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

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.items = action.payload;
      state.loading = false;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const loadProducts = (userId: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading(true));
    const products = await getProducts(userId);
    dispatch(setProducts(products));
  } catch (error) {
    dispatch(setError((error as Error).message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const addProduct = (product: Product, userId: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(setLoading(true));
    const productWithUserId = { ...product, userId };
    await insertProduct(productWithUserId);
    const updatedProducts = await getProducts(userId);
    dispatch(setProducts(updatedProducts));
  } catch (error) {
    dispatch(setError((error as Error).message));
  } finally {
    dispatch(setLoading(false));
  }
};

export const editProduct =
  (updatedProduct: Product, userId: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoading(true));
      const productWithUserId = { ...updatedProduct, userId };
      await updateProduct(productWithUserId);
      const updatedProducts = await getProducts(userId);
      dispatch(setProducts(updatedProducts));
    } catch (error) {
      dispatch(setError((error as Error).message));
    } finally {
      dispatch(setLoading(false));
    }
  };

export const deleteProduct =
  (productId: string, userId: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoading(true));
      await deleteProductDb(productId);
      const updatedProducts = await getProducts(userId);
      dispatch(setProducts(updatedProducts));
    } catch (error) {
      dispatch(setError((error as Error).message));
    } finally {
      dispatch(setLoading(false));
    }
  };

export const { setProducts, setLoading, setError } = productSlice.actions;
export default productSlice.reducer;
