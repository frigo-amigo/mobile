import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';

export const useProductList = () => {
  const selectedCategories = useSelector((state: RootState) => state.filter.selectedCategories);
  const sortOption = useSelector((state: RootState) => state.sort.sortOption);
  const allProducts = useSelector((state: RootState) => state.filter.allProducts || []);
  const searchQuery = useSelector((state: RootState) => state.search.searchQuery);

  // Поиск продуктов по строке
  const searchedProducts = allProducts.filter((product: { name: string }) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  // Применение фильтров (игнорируем фильтры, если есть поисковый запрос)
  const filteredProducts =
    searchQuery.trim() === ''
      ? selectedCategories.includes('Все продукты') || selectedCategories.length === 0
        ? allProducts
        : allProducts.filter((product: { category: string }) =>
            selectedCategories.includes(product.category),
          )
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

  return { products: sortedProducts };
};
