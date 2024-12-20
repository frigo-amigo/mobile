import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { Product } from '@/shared/types/product';

export const useProductList = () => {
  const selectedCategories = useSelector((state: RootState) => state.filter.selectedCategories);
  const sortOption = useSelector((state: RootState) => state.sort.sortOption);
  const searchQuery = useSelector((state: RootState) => state.search.searchQuery);

  const allProducts = useSelector(
    (state: { product: { items: Product[] } }) => state.product.items,
  );
  const [loading, setLoading] = useState(true);

  const searchedProducts = allProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const filteredProducts =
    searchQuery.trim() === ''
      ? selectedCategories.includes('Все продукты') || selectedCategories.length === 0
        ? allProducts
        : allProducts.filter((product) => selectedCategories.includes(product.category))
      : searchedProducts;

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
