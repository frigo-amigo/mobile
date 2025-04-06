// // entities/user/model/user-slice.ts
// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { AppDispatch } from '@/app/store';
// import { getUser, insertUser, updateUserDb } from '@/shared/lib/db';
// import { User } from '../types';

// interface UserState {
//   user: User | null;
//   isEditing: boolean;
//   loading: boolean;
//   error: string | null;
// }

// const initialState: UserState = {
//   user: null,
//   isEditing: false,
//   loading: false,
//   error: null,
// };

// const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     setUser(state, action: PayloadAction<User>) {
//       state.user = action.payload;
//       state.loading = false;
//     },
//     setLoading(state, action: PayloadAction<boolean>) {
//       state.loading = action.payload;
//     },
//     setError(state, action: PayloadAction<string | null>) {
//       state.error = action.payload;
//     },
//     toggleEditMode(state) {
//       state.isEditing = !state.isEditing;
//     },
//   },
// });

// export const { setUser, setLoading, setError, toggleEditMode } = userSlice.actions;

// // Thunk для инициализации пользователя
// export const initUser = () => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(setLoading(true));
//     const user = await getUser();
//     dispatch(setUser(user));
//     return user; // Возвращаем пользователя для использования в initializeState
//   } catch (error) {
//     dispatch(setError((error as Error).message));
//     throw error;
//   } finally {
//     dispatch(setLoading(false));
//   }
// };

// // Thunk для обновления пользователя
// export const updateUser =
//   (userData: Partial<User> & { id: string }) => async (dispatch: AppDispatch) => {
//     try {
//       dispatch(setLoading(true));
//       await updateUserDb(userData);
//       const updatedUser = await getUser();
//       dispatch(setUser(updatedUser));
//     } catch (error) {
//       dispatch(setError((error as Error).message));
//     } finally {
//       dispatch(setLoading(false));
//     }
//   };

// export default userSlice.reducer;

import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../types';
import { fetchUserInfoApi, updateUserApi } from './auth-service';
import { RootState } from '@/app/store';

interface UserState {
  user: User | null;
  isEditing: boolean;
  isLoading: boolean; // Добавим для отслеживания загрузки
  error: string | null; // Для обработки ошибок
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
      const userData = await fetchUserInfoApi(token); // Предполагаемый API-вызов
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
      // Fetch user
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
      // Update user
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
