import AsyncStorage from '@react-native-async-storage/async-storage';
import { Product } from '../types/product';

export let storage = true;

const saveProducts = async (products: Product[]) => {
  try {
    const previousData = await AsyncStorage.getItem('products');
    const previousProducts: Product[] = previousData ? JSON.parse(previousData) : [];
    previousProducts.push(...products);
    const newData = JSON.stringify(previousProducts);
    await AsyncStorage.setItem('products', newData);
    console.log('Products saved successfully');
    storage = !storage;
    console.log(storage);
  } catch (error) {
    console.error('Error saving products', error);
  }
};

const loadProducts = async (): Promise<Product[]> => {
  try {
    const jsonData = await AsyncStorage.getItem('products');
    return jsonData ? JSON.parse(jsonData) : [];
  } catch (error) {
    console.error('Error loading products', error);
    return [];
  }
};

const updateProducts = async (updatedProduct: Product) => {
  try {
    const products = await loadProducts();
    const updatedProducts = products.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product,
    );
    await saveProducts(updatedProducts);
    console.log('Product updated successfully');
    storage = !storage;
  } catch (error) {
    console.error('Error updating product', error);
  }
};

const deleteProducts = async (productId: string) => {
  try {
    const products = await loadProducts();
    const updatedProducts = products.filter((product) => product.id !== productId);
    await saveProducts(updatedProducts);
    console.log('Product deleted successfully');
    storage = !storage;
  } catch (error) {
    console.error('Error deleting product', error);
  }
};

export { saveProducts, loadProducts, updateProducts, deleteProducts };
