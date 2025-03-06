// import { addProduct } from '@/entities/product/model/product-slice';
// import { AppDispatch } from '@/app/store';
// import { Product } from '@/shared/types/product';

// export const handleAddProduct = (product: Product, userId: string) => (dispatch: AppDispatch) =>
//   dispatch(addProduct(product, userId));

// export { AddProductModal } from './ui/add-product-modal';

import ProductFormModal from '../product-form/ui/product-form-modal';

export const AddProductModal = ProductFormModal;
