export interface Product {
  id?: string;
  name: string;
  category: string;
  quantity: number;
  minQuantity: number;
  quantityUnit: string;
  manufactureDate: string;
  expirationDate: string;
}

export const units = ['шт', 'кг', 'г', 'литр', 'мл'] as const;
export type Unit = (typeof units)[number];
