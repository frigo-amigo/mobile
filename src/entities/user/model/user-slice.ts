// entities/user/model/userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getUser, insertUser, updateUserDb } from 'shared/lib/db';
import { User } from '../types';

interface UserState {
  user: User | null;
  isEditing: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  user: null,
  isEditing: false,
  loading: false,
  error: null,
};

// Асинхронные действия можно вынести в thunk, но для простоты оставим здесь
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
      state.loading = false;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
    toggleEditMode(state) {
      state.isEditing = !state.isEditing;
    },
  },
});

export const { setUser, setLoading, setError, toggleEditMode } = userSlice.actions;

// Thunk для инициализации пользователя
export const initUser = () => async (dispatch: any) => {
  try {
    dispatch(setLoading(true));
    const user = await getUser();
    dispatch(setUser(user));
  } catch (error) {
    dispatch(setError((error as Error).message));
  } finally {
    dispatch(setLoading(false));
  }
};

// Thunk для обновления пользователя
export const updateUser = (userData: Partial<User> & { id: string }) => async (dispatch: any) => {
  try {
    dispatch(setLoading(true));
    await updateUserDb(userData);
    const updatedUser = await getUser();
    dispatch(setUser(updatedUser));
  } catch (error) {
    dispatch(setError((error as Error).message));
  } finally {
    dispatch(setLoading(false));
  }
};

export default userSlice.reducer;
