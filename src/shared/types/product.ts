export interface Product {
  id: string;
  name: string;
  icon?: string | null;
  category: string;
  quantity: number;
  unit: string;
  minQuantity: number;
  manufactureDate: string;
  expirationDate: string;
  storageDuration: string;
}

export const units: string[] = ['кг', 'шт', 'л', 'уп'];
