import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@/shared/types/product';
// import { allProducts } from '@/shared/data/data';
import { saveProducts } from '@/shared/utils/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ProductState {
  items: Product[];
}

const initialState: ProductState = {
  // items: allProducts,
  items: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.items = action.payload;
      saveToAsyncStorage(state.items);
    },
    addProduct: (state, action: PayloadAction<Product>) => {
      // saveProducts([action.payload]);
      state.items.push(action.payload);
      saveToAsyncStorage(state.items);
    },
    editProduct: (state, action: PayloadAction<Product>) => {
      const index = state.items.findIndex((product) => product.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
      saveToAsyncStorage(state.items);
    },
    deleteProduct(state, action: PayloadAction<string>) {
      state.items = state.items.filter((product) => product.id !== action.payload);
      saveToAsyncStorage(state.items);
    },
  },
});

export const { addProduct, editProduct, deleteProduct, setProducts } = productSlice.actions;
export default productSlice.reducer;

export const saveToAsyncStorage = async (products: Product[]) => {
  try {
    await AsyncStorage.setItem('products', JSON.stringify(products));
  } catch (error) {
    console.error('Failed to save products to AsyncStorage:', error);
  }
};

export const loadFromAsyncStorage = async () => {
  try {
    const productsJson = await AsyncStorage.getItem('products');
    return productsJson ? JSON.parse(productsJson) : [];
  } catch (error) {
    console.error('Failed to load products from AsyncStorage:', error);
    return [];
  }
};

export const removeFromAsyncStorage = async () => {
  try {
    await AsyncStorage.removeItem('products');
  } catch (error) {
    console.error('Failed to remove products from AsyncStorage:', error);
  }
};
