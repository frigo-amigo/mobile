import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../types';
import { fetchUserInfoApi, loginApi, registerApi } from './auth-service';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_ENDPOINTS } from '@/shared/lib/api/api-constants';
import { fetchProducts } from '@/entities/product/model/product-slice';
import { setUser } from '@/entities/user/model/user-slice'; // Импортируем setUser

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

export const login = createAsyncThunk(
  API_ENDPOINTS.LOGIN,
  async (credentials: { email: string; password: string }, { dispatch, rejectWithValue }) => {
    try {
      const response = await loginApi(credentials);
      const token = response.token;
      await AsyncStorage.setItem('token', token);
      dispatch({ type: 'auth/setToken', payload: token });
      const user = await fetchUserInfoApi(token);
      dispatch(setUser(user));
      await dispatch(fetchProducts(user.id)).unwrap();
      return { token, user };
    } catch (err: any) {
      console.error('login: Ошибка:', err.message || err);
      return rejectWithValue(err.message || 'Ошибка входа');
    }
  },
);

export const register = createAsyncThunk(
  API_ENDPOINTS.REGISTER,
  async (
    credentials: { username: string; email: string; password: string },
    { dispatch, rejectWithValue },
  ) => {
    try {
      const response = await registerApi(credentials);
      await AsyncStorage.setItem('token', response.token);
      const user = await fetchUserInfoApi(response.token);
      dispatch(setUser(user));
      return { token: response.token, user };
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || 'Ошибка регистрации');
    }
  },
);

export const checkAuth = createAsyncThunk(
  'auth/checkAuth',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const token = await AsyncStorage.getItem('token');
      console.log('checkAuth: Токен из AsyncStorage:', token);
      if (!token) {
        return rejectWithValue('No token found');
      }
      dispatch({ type: 'auth/setToken', payload: token });
      const user = await fetchUserInfoApi(token);
      dispatch(setUser(user));
      await dispatch(fetchProducts(user.id)).unwrap();
      return { token, user };
    } catch (err: any) {
      console.error('checkAuth: Подробная ошибка:', err.message || err);
      return rejectWithValue(err.message || 'Not authenticated');
    }
  },
);

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
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
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
      .addCase(checkAuth.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        checkAuth.fulfilled,
        (state, action: PayloadAction<{ token: string; user: User }>) => {
          state.token = action.payload.token;
          state.user = action.payload.user;
          state.isLoading = false;
        },
      )
      .addCase(checkAuth.rejected, (state, action) => {
        state.isLoading = false;
        state.token = null;
        state.user = null;
        state.error = action.payload as string;
      });
  },
});

export const { logout, setToken } = authSlice.actions;
export default authSlice.reducer;
