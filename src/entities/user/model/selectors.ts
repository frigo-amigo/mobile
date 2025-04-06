import { createSelector } from 'reselect';
import { RootState } from '@/app/store';

// Базовые селекторы
const selectAuth = (state: RootState) => state.auth;

// Мемоизированный селектор для статуса аутентификации
export const selectAuthStatus = createSelector([selectAuth], (auth) => ({
  isLoading: auth.isLoading,
  error: auth.error,
}));

// Селектор для проверки авторизации
export const selectIsAuthenticated = (state: RootState) => !!state.auth.token;

export const selectUser = (state: RootState) => state.user.user;
export const selectIsEditing = (state: RootState) => state.user.isEditing;
export const selectUserLoading = (state: RootState) => state.user.isLoading;
