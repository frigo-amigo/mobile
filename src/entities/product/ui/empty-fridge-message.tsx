import { CustomText } from '@/shared/ui';
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;

export const EmptyFridgeMessage = () => (
  <View style={styles.container}>
    <CustomText size="m" weight="regular" color="grey90">
      Полки вашего холодильника пусты
    </CustomText>
  </View>
);

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignSelf: 'center',
    top: width / 2 + 40,
    zIndex: 1,
  },
});
