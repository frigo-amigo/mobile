import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { CustomText, Icon, IconButton, PrimaryButton, Select } from '@/shared/ui';
import { Input } from '@/shared/ui';
import { categories } from '@/shared/data/categories';
import productIcons from '@/shared/data/product-icons';
import categoryIcons from '@/shared/data/categories-icons';
import { colors } from '@/shared/styles/global';
import pluralize from 'pluralize';
import { useDispatch } from 'react-redux';
import { addProduct } from '@/entities/product/model/product-slice';
import { units } from '@/shared/types/product';

const width = Dimensions.get('window').width;

type AddProductModalProps = {};

export const AddProductModal: React.FC<AddProductModalProps> = ({}) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [unit, setUnit] = useState('шт');
  const [minQuantity, setMinQuantity] = useState(1);
  const [manufactureDate, setManufactureDate] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const dispatch = useDispatch();

  const calculateStorageDuration = () => {
    try {
      if (manufactureDate && expirationDate) {
        const manufacture = new Date(manufactureDate.split('.').reverse().join('-'));
        const expiration = new Date(expirationDate.split('.').reverse().join('-'));

        if (isNaN(manufacture.getTime()) || isNaN(expiration.getTime())) {
          return '—';
        }

        const diffTime = expiration.getTime() - manufacture.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return `${Math.max(diffDays, 0)} дн.`;
      }
    } catch (error) {
      console.error('Ошибка в calculateStorageDuration:', error);
      return '—';
    }

    return '—';
  };

  const formatDateInput = (text: string) => {
    const sanitized = text.replace(/[^0-9]/g, '');
    const formatted =
      sanitized.length <= 2
        ? sanitized
        : sanitized.length <= 4
        ? `${sanitized.slice(0, 2)}.${sanitized.slice(2)}`
        : `${sanitized.slice(0, 2)}.${sanitized.slice(2, 4)}.${sanitized.slice(4, 8)}`;
    return formatted;
  };

  const getIcon = (): string => {
    const singularName = pluralize.singular(name.trim().toLowerCase());
    if (productIcons[singularName]) return singularName;
    if (categoryIcons[category]) return category;
    return 'undefined';
  };

  const generateId = () => `${Date.now()}`;

  const handleAddProduct = () => {
    if (!name.trim()) return;

    const id = generateId();

    dispatch(
      addProduct({
        id,
        name,
        category,
        quantity,
        unit,
        manufactureDate,
        expirationDate,
      }),
    );

    setName('');
    setCategory('');
    setQuantity(1);
    setUnit('шт');
    setManufactureDate('');
    setExpirationDate('');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        {/* <ScrollView contentContainerStyle={styles.scrollContainer} scrollEnabled={false}> */}
        <View style={styles.container}>
          <View style={styles.icon}>
            {getIcon() ? (
              <Icon name={getIcon()} width={80} height={80} />
            ) : (
              <View style={styles.emptyIcon}></View>
            )}
          </View>
          <Input
            value={name}
            onChangeText={setName}
            label="Название"
            onClear={() => setName('')}
            showClearButton
          />
          <Select
            options={categories}
            defaultOption="Выберите категорию"
            onSelect={setCategory}
            label="Категория"
          />
          <View style={styles.row}>
            <CustomText size="xs" weight="regular" color="grey90" style={styles.label}>
              Количество
            </CustomText>
            <IconButton src="minus" onPress={() => setQuantity(Math.max(quantity - 1, 1))} />
            <Input
              value={String(quantity)}
              onChangeText={(value) => setQuantity(Math.max(Number(value)))}
              keyboardType="numeric"
              style={{ maxWidth: 70 }}
            />
            <IconButton src="plus" onPress={() => setQuantity(Math.max(quantity + 1))} />
            <Select options={units} defaultOption={unit} onSelect={setUnit} />
          </View>
          <Input
            value={String(minQuantity)}
            onChangeText={(value) => setMinQuantity(Math.max(Number(value), 1))}
            label="Минимальный остаток"
            keyboardType="numeric"
          />
          <View style={styles.dates}>
            <View style={styles.dateContainer}>
              <Input
                placeholder="дд.мм.гггг"
                label="Дата изготовления"
                value={manufactureDate}
                keyboardType="numeric"
                onChangeText={(text) => {
                  setManufactureDate(formatDateInput(text));
                }}
              />
            </View>
            <View style={styles.dateContainer}>
              <Input
                placeholder="дд.мм.гггг"
                label="Съесть до"
                value={expirationDate}
                keyboardType="numeric"
                onChangeText={(text) => {
                  setExpirationDate(formatDateInput(text));
                }}
              />
            </View>
          </View>

          <Input value={calculateStorageDuration()} editable={false} label="Хранить не более" />
          <PrimaryButton children="Добавить" width="max" onPress={handleAddProduct} />
        </View>
        {/* </ScrollView> */}
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
  },
  container: {
    gap: 22,
    padding: 20,
  },
  icon: {
    alignItems: 'center',
  },
  emptyIcon: {
    width: 80,
    height: 80,
    backgroundColor: colors.gray10,
    borderRadius: 40,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    width: width - 226,
  },
  label: {
    position: 'absolute',
    top: -17,
  },
  dates: {
    flexDirection: 'row',
    gap: 20,
  },
  dateContainer: {
    flex: 1,
  },
});
