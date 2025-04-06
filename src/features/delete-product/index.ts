import { deleteProduct } from '@/entities/product/model/product-slice';
import { AppDispatch } from '@/app/store';
import ConfirmDeleteModal from './ui/confirm-delete-modal';

export const handleDeleteProduct = (productId: string, userId: string) => (dispatch: AppDispatch) =>
  dispatch(deleteProduct(productId, userId));

export default ConfirmDeleteModal;
