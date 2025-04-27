import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { colors } from '../../../shared/styles/global';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { MainStackParamList } from '@/app/providers/navigation/main-stack';
import { StackNavigationProp } from '@react-navigation/stack';

const { width, height } = Dimensions.get('window');

type WelcomePageRouteProp = RouteProp<MainStackParamList, 'Welcome'>;
type WelcomePageNavigationProp = StackNavigationProp<MainStackParamList, 'Welcome'>;

const WelcomePage: React.FC = () => {
  const navigation = useNavigation<WelcomePageNavigationProp>();
  const route = useRoute<WelcomePageRouteProp>();

  const { userName } = route.params;

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('MainTabs');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../shared/assets/icons/common/welcome-image.png')}
        style={styles.image}
        resizeMode="cover"
      />
      {userName ? (
        <Text style={styles.welcomeText}>{`Добро пожаловать,\n${userName}!`}</Text>
      ) : (
        <Text style={styles.welcomeText}>Добро пожаловать!</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    padding: 20,
  },
  welcomeText: {
    fontSize: 32,
    color: colors.gray90,
    position: 'absolute',
    top: height * 0.1,
  },
  image: {
    width: width,
    height: height,
    position: 'absolute',
  },
});

export default WelcomePage;
