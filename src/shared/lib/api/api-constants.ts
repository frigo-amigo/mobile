export const BASE_URL = 'https://frigoamigo.ru';

export const API_ENDPOINTS = {
  REGISTER: '/api/auth/register',
  LOGIN: '/api/auth/login',
  USER_INFO: '/api/users/info',
  PRODUCTS_FETCH: '/api/products/many',
  PRODUCTS_ADD: '/api/products',
  PRODUCTS_UPDATE: '/api/products/update',
  PRODUCTS_DELETE: '/api/products/delete',
} as const;
