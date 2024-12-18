import React from 'react';
import { SvgProps } from 'react-native-svg';

// export type Unit = 'кг' | 'шт' | 'л' | 'уп';

export interface Product {
  id: string;
  name: string;
  // icon?: React.FC<SvgProps> | null;
  icon?: string | null;
  category: string;
  quantity: number;
  unit: string;
  minQuantity: number;
  manufactureDate: string;
  expirationDate: string;
}

export const units: string[] = ['кг', 'шт', 'л', 'уп'];
