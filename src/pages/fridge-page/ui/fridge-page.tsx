import { useEffect, useState } from 'react';
import { View, StyleSheet, Animated, Dimensions } from 'react-native';
import { ProductList } from '@/widgets/product-list';
import { SearchBar } from '@/features/search-product';
import { SearchButton } from '@/features/search-product';
import { FilterButton } from '@/features/filter-product';
import { SortButton } from '@/features/sort-product';
import { colors } from '@/shared/styles/global';
import { FilterPanel } from '@/features/filter-product';
import { SortPanel } from '@/features/sort-product/ui/sort-panel';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@/app/store';
import { selectUser } from '@/entities/user/model/selectors';
import { fetchProducts } from '@/entities/product/model/product-slice';

const { width } = Dimensions.get('window');

const FridgePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector(selectUser);
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [isFilterVisible, setFilterVisible] = useState(false);
  const [isSortVisible, setSortVisible] = useState(false);
  const [searchWidth] = useState(new Animated.Value(0));

  useEffect(() => {
    if (user) {
      dispatch(fetchProducts(user.id));
    }
  }, [dispatch, user]);

  const toggleSearch = () => {
    if (isSearchVisible) {
      Animated.timing(searchWidth, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start(() => setSearchVisible(false));
    } else {
      setSearchVisible(true);
      Animated.timing(searchWidth, {
        toValue: width - 160,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  };

  const toggleSort = () => {
    if (isSortVisible) {
      setSortVisible(false);
    } else {
      setFilterVisible(false);
      setSortVisible(true);
    }
  };

  const toggleFilter = () => {
    if (isFilterVisible) {
      setFilterVisible(false);
    } else {
      setSortVisible(false);
      setFilterVisible(true);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <SortButton onPress={toggleSort} isActive={isSortVisible} />
        <FilterButton onPress={toggleFilter} isActive={isFilterVisible} />
        <SearchButton onPress={toggleSearch} isActive={isSearchVisible} />

        {isSearchVisible && (
          <Animated.View style={[styles.searchContainer, { width: searchWidth }]}>
            <SearchBar />
          </Animated.View>
        )}
      </View>

      <ProductList />

      <FilterPanel isVisible={isFilterVisible} onClose={() => setFilterVisible(false)} />
      <SortPanel isVisible={isSortVisible} onClose={() => setSortVisible(false)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  topBar: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 16,
    paddingBottom: 10,
  },
  searchContainer: {
    overflow: 'hidden',
  },
});

export default FridgePage;
