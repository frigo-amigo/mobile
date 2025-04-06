// // import { CustomText, Input, PrimaryButton } from '@/shared/ui';
// // import { View, StyleSheet } from 'react-native';
// // import { useRegister } from '../model/use-register';

// // export const RegisterForm = () => {
// //   const {
// //     username,
// //     setUsername,
// //     email,
// //     setEmail,
// //     password,
// //     setPassword,
// //     handleRegister,
// //     isLoading,
// //     error,
// //   } = useRegister();

// //   return (
// //     <View style={styles.container}>
// //       <Input label="Имя пользователя" value={username} onChangeText={setUsername} />
// //       <Input label="Почта" value={email} onChangeText={setEmail} keyboardType="email-address" />
// //       <Input label="Пароль" value={password} onChangeText={setPassword} />
// //       {error ? (
// //         <CustomText size="s" style={styles.error}>
// //           {error}
// //         </CustomText>
// //       ) : null}
// //       <PrimaryButton
// //         color="green"
// //         onPress={handleRegister}
// //         disabled={isLoading || !username || !email || !password}
// //         children={isLoading ? 'Регистрация...' : 'Зарегистрироваться'}
// //       />
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     padding: 20,
// //     gap: 16,
// //   },
// //   error: {
// //     color: 'red',
// //     textAlign: 'center',
// //   },
// // });

// import { CustomText, Input, PrimaryButton } from '@/shared/ui';
// import { View, StyleSheet } from 'react-native';
// import { useRegister } from '../model/use-register';
// import { useState } from 'react';

// export const RegisterForm = () => {
//   const {
//     username,
//     setUsername,
//     email,
//     setEmail,
//     password,
//     setPassword,
//     handleRegister,
//     isLoading,
//     error,
//   } = useRegister();
//   const [confirmPassword, setConfirmPassword] = useState<string>(''); // Для поля "Пароль повторно"
//   const isPasswordMatch = password === confirmPassword;

//   return (
//     <View style={styles.container}>
//       <Input label="Имя" value={username} onChangeText={setUsername} />
//       <Input label="Почта" value={email} onChangeText={setEmail} keyboardType="email-address" />
//       <Input label="Пароль" value={password} onChangeText={setPassword} />
//       <Input label="Пароль повторно" value={confirmPassword} onChangeText={setConfirmPassword} />
//       {error ? (
//         <CustomText size="s" style={styles.error}>
//           {error}
//         </CustomText>
//       ) : null}
//       {!isPasswordMatch && confirmPassword ? (
//         <CustomText size="s" style={styles.error}>
//           Пароли не совпадают
//         </CustomText>
//       ) : null}
//       <PrimaryButton
//         color="green"
//         width="max"
//         onPress={handleRegister}
//         disabled={
//           isLoading || !username || !email || !password || !confirmPassword || !isPasswordMatch
//         }
//         children={isLoading ? 'Регистрация...' : 'Зарегистрироваться'}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     width: '100%',
//     gap: 22,
//   },
//   error: {
//     color: 'red',
//     textAlign: 'center',
//   },
// });

import { CustomText, Input, PrimaryButton } from '@/shared/ui';
import { View, StyleSheet } from 'react-native';
import { useRegister } from '../model/use-register';
import { useState } from 'react';

export const RegisterForm = () => {
  const {
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    handleRegister,
    isLoading,
    error,
  } = useRegister();
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const isPasswordMatch = password === confirmPassword;

  return (
    <View style={styles.container}>
      <Input label="Имя" value={username} onChangeText={setUsername} />
      <Input label="Почта" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <Input label="Пароль" value={password} onChangeText={setPassword} />
      <Input label="Пароль повторно" value={confirmPassword} onChangeText={setConfirmPassword} />
      {error && (
        <CustomText size="s" style={styles.error}>
          {error}
        </CustomText>
      )}
      {!isPasswordMatch && confirmPassword && (
        <CustomText size="s" style={styles.error}>
          Пароли не совпадают
        </CustomText>
      )}
      <PrimaryButton
        color="green"
        width="max"
        onPress={handleRegister}
        disabled={
          isLoading || !username || !email || !password || !confirmPassword || !isPasswordMatch
        }
      >
        {isLoading ? 'Регистрация...' : 'Зарегистрироваться'}
      </PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: 22,
  },
  error: {
    color: 'red',
    textAlign: 'center',
  },
});
