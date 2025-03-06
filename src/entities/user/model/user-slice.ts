// entities/user/model/userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '@/entities/user/types';

const initialState: {
  user: User;
  isEditing: boolean;
} = {
  user: {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar:
      'https://avatars.mds.yandex.net/i?id=31b2bf0850da1e7a6af9a680bf9f9a61_l-3600087-images-thumbs&n=13', // моковая аватарка
  },
  isEditing: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleEditMode(state) {
      state.isEditing = !state.isEditing;
    },
    updateUser(state, action: PayloadAction<Partial<User>>) {
      state.user = { ...state.user, ...action.payload };
      state.isEditing = false;
    },
  },
});

export const { toggleEditMode, updateUser } = userSlice.actions;
export default userSlice.reducer;
