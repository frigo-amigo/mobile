import { apiClient } from '@/shared/lib/api/api-client';
import { API_ENDPOINTS } from '@/shared/lib/api/api-constants';
import { Product } from '@/shared/types/product';

interface ProductsResponse {
  products: Product[];
}

export const fetchProductsApi = async (
  userId: string,
  token: string,
): Promise<ProductsResponse> => {
  const response = await apiClient.get('/api/products/many', {
    params: { userId },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const addProductApi = async (product: Product, token: string): Promise<Product> => {
  try {
    const response = await apiClient.post('/api/products', product, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateProductApi = async (product: Product, token: string): Promise<Product> => {
  try {
    const { id, ...updateData } = product;
    const response = await apiClient.put(`/api/products/${id}`, updateData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error: any) {
    console.error('updateProductApi: Ошибка:', {
      status: error.response?.status,
      data: error.response?.data,
      message: error.message,
    });
    throw error;
  }
};

export const deleteProductApi = async (productId: string, token: string): Promise<void> => {
  try {
    const response = await apiClient.delete(`/api/products/delete`, {
      params: { id: productId },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error: any) {
    console.error('deleteProductApi: Ошибка:', {
      status: error.response?.status,
      data: error.response?.data,
      message: error.message,
      url: error.config?.url,
    });
    throw error;
  }
};
