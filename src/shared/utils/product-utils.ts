import pluralize from 'pluralize';
import {
  productNameMapping,
  categoryNameMapping,
  iconDefinitions,
} from '../assets/icons/icon-mapping';

export const getIcon = (name: string, category: string): string => {
  const singularName = pluralize.singular(name.trim().toLowerCase());

  const productKey = productNameMapping[singularName];
  if (productKey && iconDefinitions[productKey]) {
    return productKey;
  }

  const categoryKey = categoryNameMapping[category];
  if (categoryKey && iconDefinitions[categoryKey]) {
    return categoryKey;
  }

  return 'undefined';
};
