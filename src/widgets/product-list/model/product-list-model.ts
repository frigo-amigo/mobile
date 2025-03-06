// import { useMemo, useState } from 'react';
// import { useSelector } from 'react-redux';
// import { RootState } from '@/app/store';
// import { Product } from '@/shared/types/product';
// import { formatDate } from '@/shared/utils/date-utils';

// export const useProductList = () => {
//   const selectedCategories = useSelector((state: RootState) => state.filter.selectedCategories);
//   const sortOption = useSelector((state: RootState) => state.sort.sortOption);
//   const searchQuery = useSelector((state: RootState) => state.search.searchQuery);

//   const allProducts = useSelector(
//     (state: { product: { items: Product[] } }) => state.product.items,
//   );

//   const filteredProducts = useMemo(() => {
//     const lowerSearchQuery = searchQuery.toLowerCase().trim();

//     // Фильтрация по категориям и поисковому запросу
//     return allProducts.filter((product) => {
//       const matchesSearch = product.name.toLowerCase().includes(lowerSearchQuery);
//       const matchesCategory =
//         selectedCategories.includes('Все продукты') ||
//         selectedCategories.length === 0 ||
//         selectedCategories.includes(product.category);

//       return matchesSearch && matchesCategory;
//     });
//   }, [allProducts, selectedCategories, searchQuery]);

//   const sortedProducts = useMemo(() => {
//     return [...filteredProducts].sort((a, b) => {
//       switch (sortOption) {
//         case 'alphabetical':
//           return a.name.localeCompare(b.name);
//         case 'quantity-asc':
//           return a.quantity - b.quantity;
//         case 'quantity-desc':
//           return b.quantity - a.quantity;
//         case 'expiration-asc':
//           return formatDate(a.expirationDate) - formatDate(b.expirationDate);
//         case 'expiration-desc':
//           return formatDate(b.expirationDate) - formatDate(a.expirationDate);
//         default:
//           return 0;
//       }
//     });
//   }, [filteredProducts, sortOption]);

//   return { products: sortedProducts, loading: false };
// };

// widgets/product-list/model/product-list-model.ts
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
