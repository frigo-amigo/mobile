import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/store';
import { login } from '@/entities/user/model/auth-slice';
import { selectAuthStatus } from '@/entities/user/model/selectors';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParamList } from '@/app/providers/navigation/main-stack';

export const useLogin = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, error } = useSelector(selectAuthStatus);
  const navigation = useNavigation<StackNavigationProp<MainStackParamList>>();

  const handleLogin = async () => {
    try {
      await dispatch(login({ email, password })).unwrap();
      navigation.reset({
        index: 0,
        routes: [{ name: 'MainTabs' }], // Перенаправление на MainTabs
      });
    } catch (err) {
      console.error('Login error:', err);
    }
  };

  return { email, setEmail, password, setPassword, handleLogin, isLoading, error };
};
