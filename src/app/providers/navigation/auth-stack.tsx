import { AuthPage } from '@/pages/auth-page/ui/auth-page';
import { createStackNavigator } from '@react-navigation/stack';

export type AuthStackParamList = {
  Auth: undefined;
};

const Stack = createStackNavigator<AuthStackParamList>();

export const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Auth" component={AuthPage} />
    </Stack.Navigator>
  );
};
