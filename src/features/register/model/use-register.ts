// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { AppDispatch, RootState } from '@/app/store';
// import { register } from '@/entities/user/model/auth-slice';
// import { selectAuthStatus } from '@/entities/user/model/selectors';
// import { useNavigation } from '@react-navigation/native';
// import { StackNavigationProp } from '@react-navigation/stack';
// import { MainStackParamList } from '@/app/providers/navigation/main-stack';

// export const useRegister = () => {
//   const [username, setUsername] = useState<string>('');
//   const [email, setEmail] = useState<string>('');
//   const [password, setPassword] = useState<string>('');
//   const dispatch = useDispatch<AppDispatch>();
//   const { isLoading, error } = useSelector(selectAuthStatus);
//   const navigation = useNavigation<StackNavigationProp<MainStackParamList>>();

//   const handleRegister = async () => {
//     try {
//       await dispatch(register({ username, email, password })).unwrap();
//       navigation.reset({
//         index: 0,
//         routes: [{ name: 'MainTabs' }], // Перенаправление на MainTabs
//       });
//     } catch (err) {
//       console.error('Register error:', err);
//     }
//   };

//   return {
//     username,
//     setUsername,
//     email,
//     setEmail,
//     password,
//     setPassword,
//     handleRegister,
//     isLoading,
//     error,
//   };
// };

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/store';
import { register } from '@/entities/user/model/auth-slice';
import { selectAuthStatus } from '@/entities/user/model/selectors';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { MainStackParamList } from '@/app/providers/navigation/main-stack';

export const useRegister = () => {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, error } = useSelector(selectAuthStatus);
  const navigation = useNavigation<StackNavigationProp<MainStackParamList>>();

  const handleRegister = async () => {
    try {
      await dispatch(register({ username, email, password })).unwrap();
      navigation.reset({
        index: 0,
        routes: [{ name: 'MainTabs' }],
      });
    } catch (err) {
      console.error('Register error:', err);
    }
  };

  return {
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    handleRegister,
    isLoading,
    error,
  };
};
