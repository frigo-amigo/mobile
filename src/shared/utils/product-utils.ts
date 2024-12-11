import pluralize from 'pluralize';
import productIcons from '../data/product-icons';
import categoryIcons from '../data/categories-icons';

export const getIcon = (name: string, category: string): string => {
  const singularName = pluralize.singular(name.trim().toLowerCase());
  if (productIcons[singularName]) return singularName;
  if (categoryIcons[category]) return category;
  return 'undefined';
};
