import React, { useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { CustomText, Icon, IconButton, Input, PrimaryButton, Select } from '@/shared/ui';
import { useDispatch } from 'react-redux';
import { editProduct } from '@/entities/product/model/product-slice';
import { colors } from '@/shared/styles/global';
import { Product } from '@/shared/types/product';
import { categories } from '@/shared/data/categories';
import { units } from '@/shared/types/product';
import { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet';
import { calculateStorageDuration, formatDateInput } from '@/shared/utils/date-utils';
import { getIcon } from '@/shared/utils/product-utils';

type EditProductModalProps = {
  product: Product;
  onClose: () => void;
  isVisible: boolean;
};

const width = Dimensions.get('window').width;

const EditProductModal: React.FC<EditProductModalProps> = ({ product, onClose, isVisible }) => {
  const [name, setName] = useState(product.name);
  const [category, setCategory] = useState(product.category);
  const [quantity, setQuantity] = useState(product.quantity);
  const [unit, setUnit] = useState(product.unit);
  const [manufactureDate, setManufactureDate] = useState(product.manufactureDate);
  const [expirationDate, setExpirationDate] = useState(product.expirationDate);
  const [minQuantity, setMinQuantity] = useState(product.minQuantity);
  const dispatch = useDispatch();
  const storageDuration = calculateStorageDuration(manufactureDate, expirationDate);
  const iconName = getIcon(name, category);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  React.useEffect(() => {
    if (isVisible) {
      bottomSheetModalRef.current?.present();
    } else {
      bottomSheetModalRef.current?.close();
    }
  }, [isVisible]);

  const handleSave = () => {
    dispatch(
      editProduct({
        id: product.id,
        name,
        category,
        quantity,
        unit,
        manufactureDate,
        expirationDate,
        minQuantity,
      }),
    );
    onClose();
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
              <View style={styles.icon}>
                {iconName ? (
                  <Icon name={iconName} width={80} height={80} />
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

              <Input value={storageDuration} editable={false} label="Хранить не более" />
              <PrimaryButton children="Сохранить" width="max" onPress={handleSave} />
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

export default EditProductModal;
