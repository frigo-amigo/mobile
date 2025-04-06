// import { CustomText, Input, PrimaryButton } from '@/shared/ui';
// import { View, StyleSheet } from 'react-native';
// import { useLogin } from '../model/use-login';

// const LoginForm = () => {
//   const { email, setEmail, password, setPassword, handleLogin, isLoading, error } = useLogin();

//   return (
//     <View style={styles.container}>
//       <Input label="Почта" value={email} onChangeText={setEmail} keyboardType="email-address" />
//       <Input label="Пароль" value={password} onChangeText={setPassword} />
//       {error ? (
//         <CustomText size="s" style={styles.error}>
//           {error}
//         </CustomText>
//       ) : null}
//       <PrimaryButton
//         color="green"
//         onPress={handleLogin}
//         disabled={isLoading || !email || !password}
//         children={isLoading ? 'Вход...' : 'Войти'}
//       />
//     </View>
//   );
// };

// export default LoginForm;

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     gap: 16,
//   },
//   error: {
//     color: 'red',
//     textAlign: 'center',
//   },
// });
import { Input, PrimaryButton, CustomText } from '@/shared/ui';
import { View, StyleSheet } from 'react-native';
import { useLogin } from '../model/use-login';

export const LoginForm = () => {
  const { email, setEmail, password, setPassword, handleLogin, isLoading, error } = useLogin();

  return (
    <View style={styles.container}>
      <Input label="Почта" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <Input label="Пароль" value={password} onChangeText={setPassword} />
      {error ? (
        <CustomText size="s" style={styles.error}>
          {error}
        </CustomText>
      ) : null}
      <PrimaryButton
        color="green"
        width="max"
        onPress={handleLogin}
        disabled={isLoading || !email || !password}
        children={isLoading ? 'Вход...' : 'Войти'}
      />
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
