import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomePage from '@/pages/welcome-page';
import BottomTabNavigator from './bottom-tab-navigator';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

export type MainStackParamList = {
  Welcome: { userName: string };
  MainTabs: undefined;
};

const Stack = createStackNavigator<MainStackParamList>();

export const MainStack = () => {
  return (
    <BottomSheetModalProvider>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomePage} initialParams={{ userName: '' }} />
        <Stack.Screen name="MainTabs" component={BottomTabNavigator} />
      </Stack.Navigator>
    </BottomSheetModalProvider>
  );
};
