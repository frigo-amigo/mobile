import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../types';
import { fetchUserInfoApi, loginApi, registerApi } from './auth-service';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_ENDPOINTS } from '@/shared/lib/api/api-constants';

interface AuthState {
  token: string | null;
  user: User | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  token: null,
  user: null,
  isLoading: false,
  error: null,
};

// Логин
export const login = createAsyncThunk(
  API_ENDPOINTS.LOGIN,
  async (credentials: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await loginApi(credentials);
      await AsyncStorage.setItem('token', response.token);
      const user = await fetchUserInfoApi(response.token);
      return { token: response.token, user };
    } catch (err: any) {
      return rejectWithValue(err.message || 'Ошибка входа');
    }
  },
);

// Регистрация
export const register = createAsyncThunk(
  API_ENDPOINTS.REGISTER,
  async (
    credentials: { username: string; email: string; password: string },
    { rejectWithValue },
  ) => {
    try {
      const response = await registerApi(credentials);
      await AsyncStorage.setItem('token', response.token);
      const user = await fetchUserInfoApi(response.token);
      return { token: response.token, user };
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || 'Ошибка регистрации');
    }
  },
);

// Проверка токена при запуске
export const checkAuth = createAsyncThunk('auth/checkAuth', async (_, { rejectWithValue }) => {
  try {
    const token = await AsyncStorage.getItem('token');
    if (!token) {
      throw new Error('No token found');
    }
    const user = await fetchUserInfoApi(token);
    return { token, user };
  } catch (err) {
    return rejectWithValue('Not authenticated');
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.token = null;
      state.user = null;
      state.error = null;
      AsyncStorage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
    builder
      // Логин
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<{ token: string; user: User }>) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isLoading = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      // Регистрация
      .addCase(register.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        register.fulfilled,
        (state, action: PayloadAction<{ token: string; user: User }>) => {
          state.token = action.payload.token;
          state.user = action.payload.user;
          state.isLoading = false;
        },
      )
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      // Проверка токена
      .addCase(checkAuth.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        checkAuth.fulfilled,
        (state, action: PayloadAction<{ token: string; user: User }>) => {
          state.token = action.payload.token;
          state.user = action.payload.user;
          state.isLoading = false;
        },
      )
      .addCase(checkAuth.rejected, (state) => {
        state.isLoading = false;
        state.token = null;
        state.user = null;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
