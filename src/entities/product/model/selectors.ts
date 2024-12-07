import { RootState } from '@/app/store';
import { allProducts } from '@/shared/data/data';

export const selectFilteredProducts = (state: RootState) => {
  const { selectedCategories } = state.filter;

  if (selectedCategories.includes('Все продукты') || selectedCategories.length === 0) {
    return allProducts;
  }

  return allProducts.filter((product) => selectedCategories.includes(product.category));
};
