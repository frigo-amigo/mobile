import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { setSearchQuery } from '@/features/search-product/model/search-slice';
import { Input } from '@/shared/ui';

export const SearchBar = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state: RootState) => state.search.searchQuery);

  const handleClear = () => {
    dispatch(setSearchQuery(''));
  };

  return (
    <Input
      placeholder="Поиск продуктов..."
      value={searchQuery}
      onChangeText={(text) => dispatch(setSearchQuery(text))}
      onClear={handleClear}
      showClearButton={true}
    />
  );
};
