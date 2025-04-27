import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Dimensions } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Product } from '@/shared/types/product';
import { ProductCard } from '@/entities/product/ui/product-card';
import { EmptyFridgeMessage } from '@/entities/product/ui/empty-fridge-message';
import { EditDeletePanel } from '@/shared/ui';
import { colors } from '@/shared/styles/global';
import EditProductModal from '@/features/edit-product';
import { deleteProduct, fetchProducts } from '@/entities/product/model/product-slice';
import ConfirmDeleteModal from '@/features/delete-product';
import { selectUser } from '@/entities/user/model/selectors';
import { selectFilteredSortedSearchedProducts } from '../model/product-list-model';
import { AppDispatch, RootState } from '@/app/store';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const shelfHeight = (screenWidth - 80) / 3;
const productsPerRow = 3;

export const ProductList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector(selectUser);
  const products = useSelector(selectFilteredSortedSearchedProducts) || [];
  const loading = useSelector((state: RootState) => state.product.loading);

  const [error, setError] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isEditDeletePanelVisible, setEditDeletePanelVisible] = useState(false);
  const [isEditModalVisible, setEditModalVisible] = useState(false);
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);

  useEffect(() => {
    if (user?.id && !loading && products.length === 0) {
      dispatch(fetchProducts(user.id));
    }
  }, [dispatch, user, loading, products.length]);

  const handleProductPress = (product: Product) => {
    setSelectedProduct(product);
    setEditDeletePanelVisible(true);
  };

  const handleEditPress = () => {
    setEditDeletePanelVisible(false);
    setEditModalVisible(true);
  };

  const handleDeletePress = () => {
    setDeleteModalVisible(true);
  };

  const handleCancelDelete = () => {
    setDeleteModalVisible(false);
  };

  const handleConfirmDelete = async () => {
    if (selectedProduct && user && selectedProduct.id) {
      try {
        await dispatch(deleteProduct({ productId: selectedProduct.id, userId: user.id })).unwrap();
        const fetchResult = await dispatch(fetchProducts(user.id)).unwrap();
        setError(null);
      } catch (error: any) {
        const errorMessage =
          error?.message ||
          error?.data?.message ||
          'Не удалось удалить продукт: ошибка сервера';
        console.error('Ошибка при удалении продукта:', {
          message: errorMessage,
          data: error?.data,
          error,
        });
        setError(errorMessage);
      }
      setDeleteModalVisible(false);
      setSelectedProduct(null);
      setEditDeletePanelVisible(false);
    }
  };

  const handleCloseModal = () => {
    setEditModalVisible(false);
    setSelectedProduct(null);
  };

  const safeProducts = Array.isArray(products) ? products : [];
  const rows: Product[][] = [];
  for (let i = 0; i < safeProducts.length; i += productsPerRow) {
    rows.push(safeProducts.slice(i, i + productsPerRow));
  }

  const minShelves = Math.ceil(screenHeight / 2 / shelfHeight);
  const totalShelves = Math.max(rows.length, minShelves);

  const shelves = Array.from({ length: totalShelves }, (_, index) => ({
    id: `shelf-${index}`,
    row: rows[index] || [],
  }));

  const renderShelf = ({ item }: { item: { id: string; row: Product[] } }) => (
    <View style={styles.shelfContainer}>
      <View style={styles.row}>
        {item.row.map((product) => (
          <ProductCard
            key={product.id || `${product.name}-${Math.random()}`}
            product={product}
            onPress={() => handleProductPress(product)}
          />
        ))}
      </View>
      <View style={styles.shelf} />
    </View>
  );

  return (
    <>
      <View style={styles.listContainer}>
        {safeProducts.length === 0 && <EmptyFridgeMessage />}
        <FlatList
          data={shelves}
          renderItem={renderShelf}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ flexGrow: 1 }}
        />
      </View>
      {isEditDeletePanelVisible && selectedProduct && (
        <EditDeletePanel onEdit={handleEditPress} onDelete={handleDeletePress} />
      )}
      {isEditModalVisible && selectedProduct && (
        <EditProductModal
          product={selectedProduct}
          onClose={handleCloseModal}
          isVisible={isEditModalVisible}
        />
      )}
      {isDeleteModalVisible && selectedProduct && (
        <ConfirmDeleteModal
          productName={selectedProduct.name}
          onCancel={handleCancelDelete}
          onConfirm={handleConfirmDelete}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  shelfContainer: {
    height: shelfHeight,
    justifyContent: 'flex-end',
    marginBottom: 28,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 20,
  },
  shelf: {
    width: screenWidth - 41,
    height: 1.5,
    backgroundColor: colors.gray10,
    alignSelf: 'center',
    marginTop: -2,
    zIndex: 1,
  },
});

export default ProductList;
