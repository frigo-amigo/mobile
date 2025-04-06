import { RootState } from '@/app/store';
import { Product } from '@/shared/types/product';

export const selectFilteredSortedSearchedProducts = (state: RootState): Product[] => {
  let products = [...state.product.items];

  // Фильтрация
  const selectedCategories = state.filter.selectedCategories;
  if (!selectedCategories.includes('Все продукты')) {
    products = products.filter((product) => selectedCategories.includes(product.category));
  }

  // Поиск
  const searchQuery = state.search.searchQuery.toLowerCase();
  if (searchQuery) {
    products = products.filter((product) => product.name.toLowerCase().includes(searchQuery));
  }

  // Сортировка
  const sortOption = state.sort.sortOption;
  switch (sortOption) {
    case 'alphabetical':
      products.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'quantity-asc':
      products.sort((a, b) => a.quantity - b.quantity);
      break;
    case 'quantity-desc':
      products.sort((a, b) => b.quantity - a.quantity);
      break;
    case 'expiration-asc':
      products.sort(
        (a, b) => new Date(a.expirationDate).getTime() - new Date(b.expirationDate).getTime(),
      );
      break;
    case 'expiration-desc':
      products.sort(
        (a, b) => new Date(b.expirationDate).getTime() - new Date(a.expirationDate).getTime(),
      );
      break;
  }

  return products;
};
