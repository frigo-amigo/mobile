import { apiClient } from '@/shared/lib/api/api-client';
import { API_ENDPOINTS } from '@/shared/lib/api/api-constants';
import { User } from '../types';

interface LoginCredentials {
  email: string;
  password: string;
}

interface RegisterCredentials {
  username: string;
  email: string;
  password: string;
}

interface AuthResponse {
  token: string;
}

interface UpdateUserCredentials {
  name: string;
  email: string;
}

// Логин
export const loginApi = async (credentials: LoginCredentials): Promise<AuthResponse> => {
  try {
    const response = await apiClient.post<AuthResponse>(API_ENDPOINTS.LOGIN, credentials);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Ошибка входа');
  }
};

// Регистрация
export const registerApi = async (credentials: RegisterCredentials): Promise<AuthResponse> => {
  try {
    const response = await apiClient.post<AuthResponse>(API_ENDPOINTS.REGISTER, credentials);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Ошибка регистрации');
  }
};

// Получение данных пользователя
export const fetchUserInfoApi = async (token: string): Promise<User> => {
  try {
    const response = await apiClient.get<User>(API_ENDPOINTS.USER_INFO, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Ошибка загрузки данных пользователя');
  }
};

// Обновление данных пользователя
export const updateUserApi = async (
  token: string,
  credentials: UpdateUserCredentials,
): Promise<User> => {
  try {
    const response = await apiClient.put<User>(API_ENDPOINTS.USER_INFO, credentials, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Ошибка обновления профиля');
  }
};
