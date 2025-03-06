// import React, { useEffect, useState } from 'react';
// import {
//   View,
//   StyleSheet,
//   Dimensions,
//   KeyboardAvoidingView,
//   Platform,
//   TouchableWithoutFeedback,
//   Keyboard,
//   TouchableOpacity,
// } from 'react-native';
// import { CustomText, Icon, IconButton, PrimaryButton, Select } from '@/shared/ui';
// import { Input } from '@/shared/ui';
// import { categories } from '@/shared/data/categories';
// import { colors } from '@/shared/styles/global';
// import { useDispatch, useSelector } from 'react-redux';
// import { addProduct } from '@/entities/product/model/product-slice';
// import { units } from '@/shared/types/product';
// import { calculateStorageDuration, formatDateInput } from '@/shared/utils/date-utils';
// import { getIcon } from '@/shared/utils/product-utils';
// import { AppDispatch } from '@/app/store';
// import { selectUser } from '@/entities/user/model/selectors';

// const width = Dimensions.get('window').width;

// type AddProductModalProps = {
//   closeModal: () => void;
// };

// export const AddProductModal: React.FC<AddProductModalProps> = ({ closeModal }) => {
//   const dispatch = useDispatch<AppDispatch>(); // Типизируем dispatch
//   const user = useSelector(selectUser);
//   const [name, setName] = useState('');
//   const [category, setCategory] = useState('');
//   const [quantity, setQuantity] = useState(1);
//   const [unit, setUnit] = useState('шт');
//   const [minQuantity, setMinQuantity] = useState(1);
//   const [manufactureDate, setManufactureDate] = useState('');
//   const [expirationDate, setExpirationDate] = useState('');
//   const [storageDuration, setStorageDuration] = useState('');
//   // const storageDuration = calculateStorageDuration(manufactureDate, expirationDate);
//   const iconName = getIcon(name, category);

//   const generateId = () => `${Date.now()}`;

//   useEffect(() => {
//     const duration = calculateStorageDuration(manufactureDate, expirationDate);
//     setStorageDuration(duration > 0 ? `${duration} дн.` : '—');
//   }, [manufactureDate, expirationDate]);

//   const handleAddProduct = () => {
//     if (!name.trim()) return;

//     const id = generateId();

//     dispatch(
//       addProduct(
//         {
//           id,
//           name,
//           category,
//           quantity,
//           minQuantity,
//           unit,
//           manufactureDate,
//           expirationDate,
//           storageDuration,
//         },
//         user.id,
//       ),
//     );

//     closeModal();

//     setName('');
//     setCategory('');
//     setQuantity(1);
//     setMinQuantity(1);
//     setUnit('шт');
//     setManufactureDate('');
//     setExpirationDate('');
//     setStorageDuration('');
//   };

//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//       style={{ flex: 1 }}
//     >
//       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//         <View style={styles.container}>
//           <TouchableOpacity onPress={closeModal} style={styles.close}>
//             <Icon name="close" width={44} height={44} />
//           </TouchableOpacity>
//           <View style={styles.icon}>
//             {iconName ? (
//               <Icon name={iconName} width={80} height={80} />
//             ) : (
//               <View style={styles.emptyIcon}></View>
//             )}
//           </View>
//           <Input
//             value={name}
//             onChangeText={setName}
//             label="Название"
//             onClear={() => setName('')}
//             showClearButton
//           />
//           <Select
//             options={categories}
//             defaultOption="Выберите категорию"
//             onSelect={setCategory}
//             label="Категория"
//           />
//           <View style={styles.row}>
//             <CustomText size="xs" weight="regular" color="grey90" style={styles.label}>
//               Количество
//             </CustomText>
//             <IconButton src="minus" onPress={() => setQuantity(Math.max(quantity - 1, 1))} />
//             <Input
//               value={String(quantity)}
//               onChangeText={(value) => setQuantity(Math.max(Number(value)))}
//               keyboardType="numeric"
//               style={{ maxWidth: 70, textAlign: 'center' }}
//             />
//             <IconButton src="plus" onPress={() => setQuantity(Math.max(quantity + 1))} />
//             <Select options={units} defaultOption={unit} onSelect={setUnit} />
//           </View>
//           <Input
//             value={String(minQuantity)}
//             onChangeText={(value) => setMinQuantity(Math.max(Number(value), 1))}
//             label="Минимальный остаток"
//             keyboardType="numeric"
//           />
//           <View style={styles.dates}>
//             <View style={styles.dateContainer}>
//               <Input
//                 placeholder="дд.мм.гггг"
//                 label="Дата изготовления"
//                 value={manufactureDate}
//                 keyboardType="numeric"
//                 onChangeText={(text) => {
//                   setManufactureDate(formatDateInput(text));
//                 }}
//                 onClear={() => setManufactureDate('')}
//                 showClearButton
//               />
//             </View>
//             <View style={styles.dateContainer}>
//               <Input
//                 placeholder="дд.мм.гггг"
//                 label="Съесть до"
//                 value={expirationDate}
//                 keyboardType="numeric"
//                 onChangeText={(text) => {
//                   setExpirationDate(formatDateInput(text));
//                 }}
//                 onClear={() => setExpirationDate('')}
//                 showClearButton
//               />
//             </View>
//           </View>

//           <Input
//             value={storageDuration}
//             editable={false}
//             label="Хранить не более"
//             style={styles.storage}
//           />
//           <PrimaryButton children="Добавить" width="max" onPress={handleAddProduct} />
//         </View>
//       </TouchableWithoutFeedback>
//     </KeyboardAvoidingView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     gap: 22,
//     padding: 20,
//     paddingTop: 50,
//   },
//   close: {
//     position: 'absolute',
//     top: 20,
//     right: 20,
//   },
//   icon: {
//     alignItems: 'center',
//   },
//   emptyIcon: {
//     width: 80,
//     height: 80,
//     backgroundColor: colors.gray10,
//     borderRadius: 40,
//   },
//   row: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 10,
//     width: width - 226,
//   },
//   label: {
//     position: 'absolute',
//     top: -17,
//   },
//   dates: {
//     flexDirection: 'row',
//     gap: 20,
//   },
//   dateContainer: {
//     flex: 1,
//   },
//   storage: {
//     backgroundColor: colors.white,
//   },
// });
