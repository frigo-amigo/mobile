// import { useSelector } from 'react-redux';
// import { RootState } from '@/app/store';

// export const useProductList = () => {
//   const selectedCategories = useSelector((state: RootState) => state.filter.selectedCategories);
//   const sortOption = useSelector((state: RootState) => state.sort.sortOption);
//   const allProducts = useSelector((state: RootState) => state.filter.allProducts || []);
//   const searchQuery = useSelector((state: RootState) => state.search.searchQuery);

//   // Поиск продуктов по строке
//   const searchedProducts = allProducts.filter((product: { name: string }) =>
//     product.name.toLowerCase().includes(searchQuery.toLowerCase()),
//   );

//   // Применение фильтров (игнорируем фильтры, если есть поисковый запрос)
//   const filteredProducts =
//     searchQuery.trim() === ''
//       ? selectedCategories.includes('Все продукты') || selectedCategories.length === 0
//         ? allProducts
//         : allProducts.filter((product: { category: string }) =>
//             selectedCategories.includes(product.category),
//           )
//       : searchedProducts;

//   // Сортировка продуктов
//   const sortedProducts = [...filteredProducts].sort((a, b) => {
//     switch (sortOption) {
//       case 'alphabetical':
//         return a.name.localeCompare(b.name);
//       case 'quantity-asc':
//         return a.quantity - b.quantity;
//       case 'quantity-desc':
//         return b.quantity - a.quantity;
//       case 'expiration-asc':
//         return new Date(a.expirationDate).getTime() - new Date(b.expirationDate).getTime();
//       case 'expiration-desc':
//         return new Date(b.expirationDate).getTime() - new Date(a.expirationDate).getTime();
//       default:
//         return 0;
//     }
//   });

//   return { products: sortedProducts };
// };

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { Product } from '@/shared/types/product';
import { loadProducts, storage } from '@/shared/utils/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useProductList = () => {
  const selectedCategories = useSelector((state: RootState) => state.filter.selectedCategories);
  const sortOption = useSelector((state: RootState) => state.sort.sortOption);
  const searchQuery = useSelector((state: RootState) => state.search.searchQuery);

  // const [allProducts, setAllProducts] = useState<Product[]>([]);
  const allProducts = useSelector(
    (state: { product: { items: Product[] } }) => state.product.items,
  );
  const [loading, setLoading] = useState(true);

  // Загрузка продуктов из async storage
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const products = await loadProducts(); // Асинхронная загрузка данных
  //       setAllProducts(products);
  //     } catch (error) {
  //       console.error('Error loading products:', error);
  //     } finally {
  //       setLoading(false); // Сбрасываем состояние загрузки
  //     }
  //   };

  //   fetchProducts();
  // }, []); // Выполнить один раз при монтировании

  // Поиск продуктов по строке
  const searchedProducts = allProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  // Применение фильтров (игнорируем фильтры, если есть поисковый запрос)
  const filteredProducts =
    searchQuery.trim() === ''
      ? selectedCategories.includes('Все продукты') || selectedCategories.length === 0
        ? allProducts
        : allProducts.filter((product) => selectedCategories.includes(product.category))
      : searchedProducts;

  // Сортировка продуктов
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case 'alphabetical':
        return a.name.localeCompare(b.name);
      case 'quantity-asc':
        return a.quantity - b.quantity;
      case 'quantity-desc':
        return b.quantity - a.quantity;
      case 'expiration-asc':
        return new Date(a.expirationDate).getTime() - new Date(b.expirationDate).getTime();
      case 'expiration-desc':
        return new Date(b.expirationDate).getTime() - new Date(a.expirationDate).getTime();
      default:
        return 0;
    }
  });

  return { products: sortedProducts, loading };
};
