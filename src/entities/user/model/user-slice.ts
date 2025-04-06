import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../types';
import { fetchUserInfoApi, updateUserApi } from './auth-service';
import { RootState } from '@/app/store';

interface UserState {
  user: User | null;
  isEditing: boolean;
  isLoading: boolean;
  error: string | null;
}

const initialState: UserState = {
  user: null,
  isEditing: false,
  isLoading: false,
  error: null,
};

export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async (_, { getState, rejectWithValue }) => {
    try {
      const state = getState() as RootState;
      const token = state.auth.token;
      if (!token) {
        throw new Error('No token found');
      }
      const userData = await fetchUserInfoApi(token);
      return userData;
    } catch (err: any) {
      return rejectWithValue(err.message || 'Ошибка загрузки пользователя');
    }
  },
);

// Асинхронное действие для обновления пользователя
export const updateUser = createAsyncThunk(
  'user/updateUser',
  async (credentials: { name: string; email: string }, { getState, rejectWithValue }) => {
    try {
      const state = getState() as RootState;
      const token = state.auth.token;
      if (!token) {
        throw new Error('No token found');
      }
      const updatedUser = await updateUserApi(token, credentials);
      return updatedUser;
    } catch (err: any) {
      return rejectWithValue(err.message || 'Ошибка обновления профиля');
    }
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleEditMode(state) {
      state.isEditing = !state.isEditing;
    },
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.user = action.payload;
        state.isEditing = false;
        state.isLoading = false;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { toggleEditMode, setUser } = userSlice.actions;
export default userSlice.reducer;
