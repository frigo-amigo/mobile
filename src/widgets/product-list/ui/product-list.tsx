import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text, Dimensions } from 'react-native';
import { useProductList } from '../model/product-list-model';
import { ProductCard } from '@/entities/product/ui/product-card';
import { EmptyFridgeMessage } from '@/entities/product/ui/empty-fridge-message';
import { Product } from '@/shared/types/product';
import { EditDeletePanel } from '@/shared/ui';
import { colors } from '@/shared/styles/global';
import EditProductModal from '@/features/edit-product/ui/edit-product-modal';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const shelfHeight = (screenWidth - 80) / 3;
const productsPerRow = 3;

export const ProductList = () => {
  const { products } = useProductList();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isEditDeletePanelVisible, setEditDeletePanelVisible] = useState(false);
  const [isEditModalVisible, setEditModalVisible] = useState(false);

  const handleProductPress = (product: Product) => {
    setSelectedProduct(product);
    setEditDeletePanelVisible(true);
  };

  const handleEditPress = () => {
    setEditDeletePanelVisible(false);
    setEditModalVisible(true);
  };

  const handleCloseModal = () => {
    setEditModalVisible(false);
    setSelectedProduct(null);
  };

  const rows: any[][] = [];
  for (let i = 0; i < products.length; i += productsPerRow) {
    rows.push(products.slice(i, i + productsPerRow));
  }

  const minShelves = Math.ceil(screenHeight / 2 / shelfHeight);
  const totalShelves = Math.max(rows.length, minShelves);

  const shelves = Array.from({ length: totalShelves }, (_, index) => ({
    id: `shelf-${index}`,
    row: rows[index] || [],
  }));

  const renderShelf = ({ item }: { item: { id: string; row: any[] } }) => (
    <View style={styles.shelfContainer}>
      <View style={styles.row}>
        {item.row.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onPress={() => handleProductPress(product)} // Передаем обработчик
          />
        ))}
        {/* Плашка будет видна после нажатия */}
      </View>
      <View style={styles.shelf} />
    </View>
  );

  return (
    <>
      <View style={styles.listContainer}>
        {products.length === 0 && <EmptyFridgeMessage />}
        <FlatList
          data={shelves}
          renderItem={renderShelf}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ flexGrow: 1 }}
        />
      </View>
      {isEditDeletePanelVisible && selectedProduct && (
        <EditDeletePanel
          onEdit={handleEditPress}
          onDelete={() => console.log('Удалить продукт')} // Позже реализуем удаление
        />
      )}
      {isEditModalVisible && selectedProduct && (
        <EditProductModal product={selectedProduct} onClose={handleCloseModal} />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  emptyContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  shelfContainer: {
    height: shelfHeight,
    justifyContent: 'flex-end',
    marginBottom: 28,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
