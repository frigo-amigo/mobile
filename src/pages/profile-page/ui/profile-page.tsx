// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const ProfilePage = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Страница профиля</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#FFFFFF',
//   },
//   text: {
//     fontSize: 24,
//     color: '#393A3B',
//   },
// });

// export default ProfilePage;

import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, selectIsEditing } from 'entities/user/model/selectors';
import { toggleEditMode, updateUser } from 'entities/user/model/user-slice';
import { Icon, Input, PrimaryButton, CustomText } from '@/shared/ui';
import { colors } from '@/shared/styles/global';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isEditing = useSelector(selectIsEditing);

  const [name, setName] = React.useState(user.name);
  const [email, setEmail] = React.useState(user.email);

  const handleSave = () => {
    dispatch(updateUser({ name, email }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => dispatch(toggleEditMode())}>
          <Icon name="edit" width={28} height={28} />
        </TouchableOpacity>
      </View>

      <Image source={{ uri: user.avatar }} style={styles.avatar} />

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
            Сохранить
          </PrimaryButton>
        </View>
      ) : (
        <View style={styles.infoContainer}>
          <CustomText style={styles.name} size="l">
            {user.name}
          </CustomText>
          <CustomText size="m">{user.email}</CustomText>
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
