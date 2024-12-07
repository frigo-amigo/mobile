import { LogBox, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
LogBox.ignoreAllLogs();

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MainStack } from '@/app/providers/navigation/main-stack';
import { store } from '@/app/store';
import { Provider } from 'react-redux';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

const Stack = createStackNavigator();

function App() {
  const [loaded, error] = useFonts({
    'Jost-Regular': require('@/shared/assets/fonts/Jost-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </Provider>
    </GestureHandlerRootView>
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    // </View>
  );
}

let AppEntryPoint = App;

// if (Constants.expoConfig.extra.storybookEnabled === 'true') {
//   AppEntryPoint = require('./.storybook').default;
// }

// console.log('Is Storybook enabled?', Constants.expoConfig.extra.storybookEnabled);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AppEntryPoint;
