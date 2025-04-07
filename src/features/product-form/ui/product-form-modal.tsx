import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import { CustomText, Icon, IconButton, PrimaryButton, Select, Input } from '@/shared/ui';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, editProduct, fetchProducts } from '@/entities/product/model/product-slice';
import { Product, units } from '@/shared/types/product';
import { categories } from '@/shared/data/categories';
import { colors } from '@/shared/styles/global';
import {
  calculateStorageDuration,
  formatDateForServer,
  formatDateInput,
} from '@/shared/utils/date-utils';
import { getIcon } from '@/shared/utils/product-utils';
import { AppDispatch } from '@/app/store';
import { selectUser } from '@/entities/user/model/selectors';
import { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet';

const width = Dimensions.get('window').width;

type ProductFormModalProps = {
  product?: Product;
  isVisible: boolean;
  onClose: () => void;
};

export const ProductFormModal: React.FC<ProductFormModalProps> = ({
  product,
  isVisible,
  onClose,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector(selectUser);
  const isEditing = !!product;

  const [name, setName] = useState(product?.name || '');
  const [category, setCategory] = useState(product?.category || '');
  const [quantity, setQuantity] = useState(product?.quantity || 1);
  const [quantityUnit, setQuantityUnit] = useState(product?.quantityUnit || 'шт');
  const [minQuantity, setMinQuantity] = useState(product?.minQuantity || 1);
  const [manufactureDate, setManufactureDate] = useState(
    product?.manufactureDate ? new Date(product.manufactureDate).toLocaleDateString('ru-RU') : '',
  );
  const [expirationDate, setExpirationDate] = useState(
    product?.expirationDate ? new Date(product.expirationDate).toLocaleDateString('ru-RU') : '',
  );
  const [storageDuration, setStorageDuration] = useState('');
  const [error, setError] = useState<string | null>(null);
  const iconName = getIcon(name, category);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  useEffect(() => {
    const duration = calculateStorageDuration(manufactureDate, expirationDate);
    setStorageDuration(duration > 0 ? `${duration} дн.` : '—');
  }, [manufactureDate, expirationDate]);

  useEffect(() => {
    if (isVisible) {
      bottomSheetModalRef.current?.present();
    } else {
      bottomSheetModalRef.current?.close();
    }
  }, [isVisible]);

  const handleSubmit = async () => {
    console.log('handleSubmit вызван');
    if (!name.trim() || !user) {
      console.log('Условие не выполнено: name или user отсутствуют', { name, user });
      return;
    }

    const productData: Product & { updatedFields?: string[] } = {
      id: product?.id,
      name,
      category,
      quantity,
      minQuantity,
      quantityUnit,
      manufactureDate: formatDateForServer(manufactureDate),
      expirationDate: formatDateForServer(expirationDate),
    };

    console.log('productData перед отправкой:', productData);

    try {
      if (isEditing && productData.id) {
        const updatedFields = Object.keys(productData).filter(
          (key) => productData[key as keyof Product] !== product![key as keyof Product],
        );
        const payload = { ...productData, updatedFields };
        console.log('Отправляем editProduct с payload:', payload);
        const result = await dispatch(editProduct({ product: payload, userId: user.id })).unwrap();
        console.log('editProduct результат:', result);
        console.log('Продукт успешно обновлён');
      } else {
        console.log('Отправляем addProduct с productData:', productData);
        const result = await dispatch(
          addProduct({ product: productData, userId: user.id }),
        ).unwrap();
        console.log('addProduct результат:', result);
        console.log('Продукт успешно добавлен');
      }
      const updatedProducts = await dispatch(fetchProducts(user.id)).unwrap();
      console.log('Продукты успешно обновлены:', updatedProducts);
      onClose();
      setName('');
      setCategory('');
      setQuantity(1);
      setMinQuantity(1);
      setQuantityUnit('шт');
      setManufactureDate('');
      setExpirationDate('');
    } catch (error) {
      console.error('Ошибка в handleSubmit:', error);
    }
  };

  return (
    <BottomSheetModal
      handleComponent={() => (
        <View style={styles.handleContainer}>
          <View style={styles.handle} />
        </View>
      )}
      ref={bottomSheetModalRef}
      snapPoints={['50%']}
      onDismiss={onClose}
      style={{
        flex: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -1 },
        shadowOpacity: 0.3,
      }}
    >
      <BottomSheetView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <View style={styles.container}>
              {isEditing ? null : (
                <TouchableOpacity onPress={onClose} style={styles.close}>
                  <Icon name="close" width={44} height={44} />
                </TouchableOpacity>
              )}
              <View style={styles.icon}>
                {iconName ? (
                  <Icon name={iconName} width={80} height={80} />
                ) : (
                  <View style={styles.emptyIcon} />
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
                selectedOption={category || undefined}
                defaultOption={category || 'Выберите категорию'}
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
                  onChangeText={(value) => setQuantity(Math.max(Number(value) || 1, 1))}
                  keyboardType="numeric"
                  style={{ maxWidth: 70, textAlign: 'center' }}
                />
                <IconButton src="plus" onPress={() => setQuantity(quantity + 1)} />
                <Select
                  options={units as unknown as string[]}
                  defaultOption={quantityUnit}
                  onSelect={setQuantityUnit}
                />
              </View>
              <Input
                value={String(minQuantity)}
                onChangeText={(value) => setMinQuantity(Math.max(Number(value) || 1, 1))}
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
                    onChangeText={(text) => setManufactureDate(formatDateInput(text))}
                    onClear={() => setManufactureDate('')}
                    showClearButton
                  />
                </View>
                <View style={styles.dateContainer}>
                  <Input
                    placeholder="дд.мм.гггг"
                    label="Съесть до"
                    value={expirationDate}
                    keyboardType="numeric"
                    onChangeText={(text) => setExpirationDate(formatDateInput(text))}
                    onClear={() => setExpirationDate('')}
                    showClearButton
                  />
                </View>
              </View>
              <Input
                value={storageDuration}
                editable={false}
                label="Хранить не более"
                style={styles.storage}
              />
              <PrimaryButton
                children={isEditing ? 'Сохранить' : 'Добавить'}
                width="max"
                onPress={handleSubmit}
              />
            </View>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </BottomSheetView>
    </BottomSheetModal>
  );
};

const styles = StyleSheet.create({
  handleContainer: {
    alignItems: 'center',
    paddingTop: 10,
    backgroundColor: colors.white,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  handle: {
    width: 40,
    height: 4,
    backgroundColor: colors.gray30,
    borderRadius: 2,
  },
  container: {
    gap: 22,
    flexGrow: 1,
    padding: 20,
    paddingTop: 50,
  },
  close: {
    position: 'absolute',
    top: 20,
    right: 20,
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
  storage: {
    backgroundColor: colors.white,
  },
});

export default ProductFormModal;
