import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/app/store';
import { Product } from '@/shared/types/product';

const selectProducts = (state: RootState) => state.product.items || [];
const selectSelectedCategories = (state: RootState) => state.filter.selectedCategories;
const selectSearchQuery = (state: RootState) => state.search.searchQuery;
const selectSortOption = (state: RootState) => state.sort.sortOption;

export const selectFilteredSortedSearchedProducts = createSelector(
  [selectProducts, selectSelectedCategories, selectSearchQuery, selectSortOption],
  (items, selectedCategories, searchQuery, sortOption) => {
    let products = Array.isArray(items) ? [...items] : [];

    if (!selectedCategories.includes('Все продукты')) {
      products = products.filter((product) => selectedCategories.includes(product.category));
    }

    const lowerSearchQuery = searchQuery.toLowerCase();
    if (lowerSearchQuery) {
      products = products.filter((product) =>
        product.name.toLowerCase().includes(lowerSearchQuery),
      );
    }

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
  },
);
