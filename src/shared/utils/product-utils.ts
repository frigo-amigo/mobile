// import pluralize from 'pluralize';
// import productIcons from '../data/product-icons';
// import categoryIcons from '../data/categories-icons';

// export const getIcon = (name: string, category: string): string => {
//   const singularName = pluralize.singular(name.trim().toLowerCase());
//   if (productIcons[singularName]) return singularName;
//   if (categoryIcons[category]) return category;
//   return 'undefined';
// };

// src/shared/utils/product-utils.ts
import pluralize from 'pluralize';
import {
  productNameMapping,
  categoryNameMapping,
  iconDefinitions,
} from '../assets/icons/icon-mapping';

export const getIcon = (name: string, category: string): string => {
  // Приводим название продукта к единственному числу и нижнему регистру
  const singularName = pluralize.singular(name.trim().toLowerCase());

  // Проверяем, есть ли иконка для продукта
  const productKey = productNameMapping[singularName];
  if (productKey && iconDefinitions[productKey]) {
    return productKey;
  }

  // Проверяем, есть ли иконка для категории
  const categoryKey = categoryNameMapping[category];
  if (categoryKey && iconDefinitions[categoryKey]) {
    return categoryKey;
  }

  // Возвращаем иконку по умолчанию
  return 'undefined';
};
