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

export const updateProductApi = async (
  product: Product & { updatedFields?: string[] },
  token: string,
): Promise<Product> => {
  const response = await apiClient.put(API_ENDPOINTS.PRODUCTS_UPDATE, product, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const deleteProductApi = async (productId: string, token: string): Promise<void> => {
  await apiClient.delete(API_ENDPOINTS.PRODUCTS_DELETE, {
    params: { id: productId },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
