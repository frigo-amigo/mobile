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
import { selectIsAuthenticated, selectAuthStatus } from '@/entities/user/model/selectors';
import { checkAuth } from '@/entities/user/model/auth-slice';
import { RootState } from '@/app/store';

const AppContent = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const { isLoading: isAuthLoading } = useSelector(selectAuthStatus);
  const [loaded, error] = useFonts({
    'Jost-Regular': require('@/shared/assets/fonts/Jost-Regular.ttf'),
  });

  useEffect(() => {
    const prepare = async () => {
      await SplashScreen.preventAutoHideAsync();
      await dispatch(checkAuth()).unwrap();
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

// import { LogBox, StyleSheet } from 'react-native';
// import Constants from 'expo-constants';
// LogBox.ignoreAllLogs();

// import React, { useEffect } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { store, AppDispatch } from '@/app/store';
// import { Provider, useDispatch, useSelector } from 'react-redux';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import { useFonts } from 'expo-font';
// import * as SplashScreen from 'expo-splash-screen';
// import { MainStack } from '@/app/providers/navigation/main-stack';
// import { AuthStack } from '@/app/providers/navigation/auth-stack';
// import { selectIsAuthenticated, selectUser } from '@/entities/user/model/selectors';
// import { checkAuth } from '@/entities/user/model/auth-slice';
// import { RootState } from '@/app/store';
// import { loadProducts } from '@/entities/product/model/product-slice';

// const AppContent = () => {
//   const dispatch = useDispatch<AppDispatch>();
//   const isAuthenticated = useSelector(selectIsAuthenticated);
//   const user = useSelector(selectUser);
//   const { isLoading: isAuthLoading } = useSelector((state: RootState) => state.auth);
//   const [loaded, error] = useFonts({
//     'Jost-Regular': require('@/shared/assets/fonts/Jost-Regular.ttf'),
//   });

//   // Проверка аутентификации и загрузка шрифтов
//   useEffect(() => {
//     const prepare = async () => {
//       await SplashScreen.preventAutoHideAsync();
//       await dispatch(checkAuth()).unwrap();
//     };
//     prepare();
//   }, [dispatch]);

//   // Загрузка продуктов, если пользователь авторизован
//   useEffect(() => {
//     if (isAuthenticated && user) {
//       dispatch(loadProducts(user.id));
//     }
//   }, [isAuthenticated, user, dispatch]);

//   // Скрываем сплеш-скрин, когда шрифты загружены и проверка завершена
//   useEffect(() => {
//     if ((loaded || error) && !isAuthLoading) {
//       SplashScreen.hideAsync();
//     }
//   }, [loaded, error, isAuthLoading]);

//   // Пока шрифты или аутентификация загружаются, ничего не рендерим
//   if ((!loaded && !error) || isAuthLoading) {
//     return null;
//   }

//   return (
//     <NavigationContainer>{isAuthenticated ? <MainStack /> : <AuthStack />}</NavigationContainer>
//   );
// };

// function App() {
//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <Provider store={store}>
//         <AppContent />
//       </Provider>
//     </GestureHandlerRootView>
//   );
// }

// let AppEntryPoint = App;

// if (Constants.expoConfig?.extra?.storybookEnabled === 'true') {
//   AppEntryPoint = require('./.storybook').default;
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// export default AppEntryPoint;
