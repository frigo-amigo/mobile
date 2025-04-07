import { LogBox, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
LogBox.ignoreAllLogs();

import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { store, AppDispatch } from '@/app/store';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { MainStack } from '@/app/providers/navigation/main-stack';
import { AuthStack } from '@/app/providers/navigation/auth-stack';
import {
  selectIsAuthenticated,
  selectAuthStatus,
  selectUser,
} from '@/entities/user/model/selectors';
import { checkAuth } from '@/entities/user/model/auth-slice';
import { RootState } from '@/app/store';
import { fetchUser, setUser } from '@/entities/user/model/user-slice';
import { fetchProducts } from '@/entities/product/model/product-slice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { fetchUserInfoApi } from '@/entities/user/model/auth-service';

const AppContent = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const { isLoading: isAuthLoading } = useSelector(selectAuthStatus);
  const [loaded, error] = useFonts({
    'Jost-Regular': require('@/shared/assets/fonts/Jost-Regular.ttf'),
  });
  const user = useSelector(selectUser);

  useEffect(() => {
    const prepare = async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        const result = await dispatch(checkAuth()).unwrap();
      } catch (err) {}
    };
    prepare();
  }, [dispatch]);

  useEffect(() => {
    if ((loaded || error) && !isAuthLoading) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error, isAuthLoading]);

  if ((!loaded && !error) || isAuthLoading) {
    return null;
  }

  return (
    <NavigationContainer>{isAuthenticated ? <MainStack /> : <AuthStack />}</NavigationContainer>
  );
};

function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <AppContent />
      </Provider>
    </GestureHandlerRootView>
  );
}

let AppEntryPoint = App;

if (Constants.expoConfig?.extra?.storybookEnabled === 'true') {
  AppEntryPoint = require('./.storybook').default;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AppEntryPoint;
function setToken(token: string): any {
  throw new Error('Function not implemented.');
}
