import { useState } from 'react';

type SortOption = 'name' | 'quantity' | 'expirationDate';

export const useSort = () => {
  const [sortOption, setSortOption] = useState<SortOption>('name');

  const changeSortOption = (option: SortOption) => {
    setSortOption(option);
  };

  return {
    sortOption,
    changeSortOption,
  };
};
