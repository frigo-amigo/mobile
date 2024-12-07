import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AddProductPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Добавление продукта</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  text: {
    fontSize: 24,
    color: '#393A3B',
  },
});

export default AddProductPage;
