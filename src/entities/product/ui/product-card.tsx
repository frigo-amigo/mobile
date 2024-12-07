import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Product } from '@/shared/types/product';
import { CustomText, Icon } from '@/shared/ui';
import categoryIcons from '@/shared/data/categories-icons';

const { width } = Dimensions.get('window');
const cardWidth = (width - 80) / 3;

interface ProductCardProps {
  product: Product;
  onPress: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onPress }) => {
  const manufactureDate = new Date(product.manufactureDate);
  const expirationDate = new Date(product.expirationDate);
  const differenceInMillis = expirationDate.getTime() - manufactureDate.getTime();
  const lifeSpanInDays = differenceInMillis / (1000 * 60 * 60 * 24);

  const productIcon = product.icon || categoryIcons[product.category];

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <View>
          <Icon name="quantity-circle" width={cardWidth / 4} height={cardWidth / 4} />
          <CustomText size="xs" weight="regular" color="grey90" style={styles.quantityText}>
            {product.quantity} {product.unit}
          </CustomText>
        </View>
        <View style={styles.date}>
          {lifeSpanInDays > 10 && (
            <Icon name="date-circle-green" width={cardWidth / 2.9} height={cardWidth / 2.9} />
          )}
          {lifeSpanInDays <= 10 && lifeSpanInDays > 4 && (
            <Icon name="date-circle-orange" width={cardWidth / 2.9} height={cardWidth / 2.9} />
          )}
          {lifeSpanInDays <= 3 && (
            <Icon name="date-circle-red" width={cardWidth / 2.9} height={cardWidth / 2.9} />
          )}

          {lifeSpanInDays < 31 && lifeSpanInDays > 1 && (
            <CustomText size="xs" weight="regular" color="white" style={styles.dateText}>
              {lifeSpanInDays} д
            </CustomText>
          )}
          {lifeSpanInDays >= 31 && lifeSpanInDays < 365 && (
            <CustomText size="xs" weight="regular" color="white" style={styles.dateText}>
              &gt; {(lifeSpanInDays / 30).toFixed(0)} м
            </CustomText>
          )}
          {Number((lifeSpanInDays / 30).toFixed(0)) >= 12 && (
            <CustomText size="xs" weight="regular" color="white" style={styles.dateText}>
              &gt; {(lifeSpanInDays / 365).toFixed(0)} л
            </CustomText>
          )}
        </View>
        <CustomText size="xs" weight="regular" color="grey90" style={styles.name}>
          {product.name}
        </CustomText>
        <Icon
          name={productIcon}
          width={cardWidth - 30}
          height={cardWidth - 30}
          style={styles.icon}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: cardWidth,
    height: cardWidth,
    // marginBottom: 30,
    // marginRight: 20,
  },
  quantityText: {
    position: 'absolute',
    top: 2,
    left: 1,
  },
  date: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    zIndex: 1,
  },
  dateText: {
    position: 'absolute',
    bottom: 7,
    right: 1,
  },
  name: {
    bottom: -cardWidth + 24,
    lineHeight: 16,
    alignSelf: 'center',
    textAlign: 'center',
  },
  icon: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 10,
  },
});
