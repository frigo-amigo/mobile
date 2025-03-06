import { useDispatch, useSelector } from 'react-redux';
import { selectUser, selectIsEditing } from 'entities/user/model/selectors';
import { toggleEditMode, updateUser } from 'entities/user/model/user-slice';
import { User } from '@/entities/user/types';
import { AppDispatch } from '@/app/store';

export const useProfile = () => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector(selectUser);
  const isEditing = useSelector(selectIsEditing);

  const handleToggleEdit = () => dispatch(toggleEditMode());
  const handleUpdateUser = (data: Partial<User> & { id: string }) => dispatch(updateUser(data));

  return {
    user,
    isEditing,
    handleToggleEdit,
    handleUpdateUser,
  };
};
