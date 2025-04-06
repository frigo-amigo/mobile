import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Product } from '@/shared/types/product';
import { CustomText, Icon } from '@/shared/ui';
import { getIcon } from '@/shared/utils/product-utils';
import { calculateRemainingPercentage, calculateStorageDuration } from '@/shared/utils/date-utils';

const { width } = Dimensions.get('window');
const cardWidth = (width - 80) / 3;

interface ProductCardProps {
  product: Product;
  onPress: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onPress }) => {
  const lifeSpanInDays = calculateStorageDuration(product.manufactureDate, product.expirationDate);
  const remainingPercentage = calculateRemainingPercentage(
    product.manufactureDate,
    product.expirationDate,
  );

  const productIcon = getIcon(product.name, product.category);

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
          {remainingPercentage > 50 && (
            <Icon name="date-circle-green" width={cardWidth / 2.9} height={cardWidth / 2.9} />
          )}
          {remainingPercentage <= 50 && remainingPercentage > 20 && (
            <Icon name="date-circle-orange" width={cardWidth / 2.9} height={cardWidth / 2.9} />
          )}
          {remainingPercentage <= 20 && (
            <Icon name="date-circle-red" width={cardWidth / 2.9} height={cardWidth / 2.9} />
          )}

          {remainingPercentage > 0 && (
            <CustomText size="xs" weight="regular" color="white" style={styles.dateText}>
              {lifeSpanInDays} дн
            </CustomText>
          )}
          {remainingPercentage === 0 && (
            <CustomText size="xs" weight="regular" color="white" style={styles.dateText}>
              Истек
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
