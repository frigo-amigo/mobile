import { createSelector } from 'reselect';
import { RootState } from '@/app/store';
import { User } from '../types';

const selectAuth = (state: RootState) => state.auth;

export const selectUser = (state: RootState): User | null => state.auth.user || state.user.user;
export const selectIsAuthenticated = (state: RootState): boolean => !!state.auth.token;

export const selectAuthStatus = createSelector(
  (state: RootState) => state.auth.isLoading,
  (state: RootState) => state.auth.error,
  (isLoading, error) => ({ isLoading, error }),
);

export const selectIsEditing = (state: RootState) => state.user.isEditing;
export const selectUserLoading = (state: RootState) => state.user.isLoading;
