import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, selectIsEditing, selectUserLoading } from 'entities/user/model/selectors';
import { fetchUser, toggleEditMode, updateUser } from 'entities/user/model/user-slice'; // Убрали fetchUser
import { Icon, Input, PrimaryButton, CustomText } from '@/shared/ui';
import { colors } from '@/shared/styles/global';
import { AppDispatch } from '@/app/store';
import { logout } from 'entities/user/model/auth-slice';
import { useNavigation } from '@react-navigation/native';

const ProfilePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector(selectUser);
  const isEditing = useSelector(selectIsEditing);
  const isLoading = useSelector(selectUserLoading);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (!user && !isLoading) {
      dispatch(fetchUser()); // Загружаем данные пользователя, если их нет
    }
  }, [user, isLoading, dispatch]);

  // Устанавливаем начальные значения только при изменении user
  useEffect(() => {
    if (user) {
      setName(user.username);
      setEmail(user.email);
    }
  }, [user]);

  const handleSave = () => {
    if (user) {
      dispatch(updateUser({ name, email }));
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  // Если пользователь не загружен, показываем загрузку
  if (!user) {
    return <CustomText size="l">Loading...</CustomText>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => dispatch(toggleEditMode())}>
          <Icon name="edit" width={28} height={28} />
        </TouchableOpacity>
      </View>

      <Image
        source={{ uri: user.avatar || 'https://via.placeholder.com/200' }}
        style={styles.avatar}
      />

      {isEditing ? (
        <View style={styles.editContainer}>
          <Input label="Имя" value={name} onChangeText={setName} placeholder="Имя" />
          <Input
            value={email}
            onChangeText={setEmail}
            label="Почта"
            placeholder="Email"
            keyboardType="email-address"
          />
          <PrimaryButton color="green" onPress={handleSave} width="max">
            {isLoading ? 'Сохранение...' : 'Сохранить'}
          </PrimaryButton>
        </View>
      ) : (
        <View style={styles.infoContainer}>
          <CustomText style={styles.name} size="l">
            {user.username}
          </CustomText>
          <CustomText size="m">{user.email}</CustomText>
          <PrimaryButton color="orange" onPress={handleLogout} width="max">
            Выйти
          </PrimaryButton>
        </View>
      )}
    </View>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 20,
  },
  header: {
    flexDirection: 'row-reverse',
    marginBottom: 20,
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  editContainer: {
    flex: 1,
    gap: 22,
  },
  name: {
    textAlign: 'center',
  },
  infoContainer: {
    flex: 1,
    gap: 42,
  },
});
