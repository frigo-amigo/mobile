import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@/shared/types/product';
import { allProducts } from '@/shared/data/data';

interface ProductState {
  items: Product[];
}

const initialState: ProductState = {
  items: allProducts,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.items.push(action.payload);
    },
    editProduct: (state, action: PayloadAction<Product>) => {
      const index = state.items.findIndex((product) => product.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((product) => product.id !== action.payload);
    },
  },
});

export const { addProduct, editProduct, removeProduct } = productSlice.actions;
export default productSlice.reducer;
