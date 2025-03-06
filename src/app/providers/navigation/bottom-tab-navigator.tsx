// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { colors } from '@/shared/styles/global';

// import FridgePage from '@/pages/fridge-page';
// import RecipesPage from '@/pages/recipes-page';
// import ShoppingListPage from '@/pages/shopping-list-page';
// import AddProductPage from '@/pages/add-product-page';
// import ProfilePage from '@/pages/profile-page';
// import { Icon } from '@/shared/ui';

// import { StyleSheet, Image, Dimensions, Modal, TouchableOpacity } from 'react-native';
// import { TabBarButton } from '@/shared/ui';
// import { useState } from 'react';
// import { AddProductModal } from '@/features/add-product';

// const Tab = createBottomTabNavigator();
// const { width } = Dimensions.get('window');

// export const BottomTabNavigator = () => {
//   const [isModalVisible, setModalVisible] = useState(false);

//   const openModal = () => {
//     setModalVisible(true);
//   };

//   const closeModal = () => {
//     setModalVisible(false);
//   };

//   return (
//     <>
//       <Tab.Navigator
//         screenOptions={() => ({
//           tabBarShowLabel: false,
//           tabBarStyle: {
//             backgroundColor: colors.white,
//             borderTopWidth: 0,
//             shadowColor: '#000',
//             shadowOffset: { width: 0, height: -1 },
//             shadowOpacity: 0.3,
//             shadowRadius: 5,
//             elevation: 5,
//             height: 60,
//           },
//           tabBarIconStyle: {
//             marginTop: 10,
//           },
//           headerShown: false,
//           animation: 'shift',
//         })}
//       >
//         <Tab.Screen
//           name="FridgePage"
//           component={FridgePage}
//           options={{
//             tabBarIcon: ({ focused }) =>
//               focused ? (
//                 <Icon name="fridge-gradient" width={44} height={44} />
//               ) : (
//                 <Icon name="fridge" width={44} height={44} color={colors.gray90} />
//               ),
//           }}
//         />
//         <Tab.Screen
//           name="ShoppingListPage"
//           component={ShoppingListPage}
//           options={{
//             tabBarIcon: ({ focused }) =>
//               focused ? (
//                 <Icon name="shopping-list-gradient" width={44} height={44} />
//               ) : (
//                 <Icon name="shopping-list" width={44} height={44} color={colors.gray90} />
//               ),
//           }}
//         />
//         <Tab.Screen
//           name="AddProductPage"
//           component={AddProductPage}
//           options={{
//             tabBarIcon: ({ focused }) => <Icon name="add-product" width={64} height={64} />,
//             tabBarButton: (props) => <TabBarButton {...props} onPress={openModal} />,
//           }}
//         />
//         <Tab.Screen
//           name="RecipesPage"
//           component={RecipesPage}
//           options={{
//             tabBarIcon: ({ focused }) =>
//               focused ? (
//                 <Icon name="recipes-gradient" width={44} height={44} />
//               ) : (
//                 <Icon name="recipes" width={44} height={44} color={colors.gray90} />
//               ),
//           }}
//         />
//         <Tab.Screen
//           name="ProfilePage"
//           component={ProfilePage}
//           options={{
//             tabBarIcon: ({ focused }) =>
//               focused ? (
//                 <Icon name="profile-gradient" width={44} height={44} />
//               ) : (
//                 <Icon name="profile" width={44} height={44} color={colors.gray90} />
//               ),
//           }}
//         />
//       </Tab.Navigator>
//       <Image
//         source={require('@/shared/assets/images/common/tabbar-circle.png')}
//         style={styles.circle}
//       />
//       <Modal
//         animationType="slide"
//         transparent={false}
//         visible={isModalVisible}
//         onRequestClose={closeModal}
//       >
//         <AddProductModal closeModal={closeModal} />
//       </Modal>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   addProductIconContainer: {
//     alignItems: 'center',
//     position: 'relative',
//   },

//   circle: {
//     position: 'absolute',
//     bottom: 58,
//     left: width / 2 - 47,
//   },
// });

// export default BottomTabNavigator;

// app/providers/navigation/bottom-tab-navigator.tsx
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '@/shared/styles/global';
import FridgePage from '@/pages/fridge-page';
import RecipesPage from '@/pages/recipes-page';
import ShoppingListPage from '@/pages/shopping-list-page';
import AddProductPage from '@/pages/add-product-page';
import ProfilePage from '@/pages/profile-page';
import { Icon } from '@/shared/ui';
import { StyleSheet, Image, Dimensions, View } from 'react-native';
import { TabBarButton } from '@/shared/ui';
import { useState } from 'react';
import { ProductFormModal } from '@/features/product-form/ui/product-form-modal'; // Используем напрямую

const Tab = createBottomTabNavigator();
const { width } = Dimensions.get('window');

export const BottomTabNavigator = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={() => ({
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: colors.white,
            borderTopWidth: 0,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: -1 },
            shadowOpacity: 0.3,
            shadowRadius: 5,
            elevation: 5,
            height: 60,
          },
          tabBarIconStyle: {
            marginTop: 10,
          },
          headerShown: false,
          animation: 'shift',
        })}
      >
        <Tab.Screen
          name="FridgePage"
          component={FridgePage}
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Icon name="fridge-gradient" width={44} height={44} />
              ) : (
                <Icon name="fridge" width={44} height={44} color={colors.gray90} />
              ),
          }}
        />
        <Tab.Screen
          name="ShoppingListPage"
          component={ShoppingListPage}
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Icon name="shopping-list-gradient" width={44} height={44} />
              ) : (
                <Icon name="shopping-list" width={44} height={44} color={colors.gray90} />
              ),
          }}
        />
        <Tab.Screen
          name="AddProductPage"
          component={AddProductPage}
          options={{
            tabBarIcon: ({ focused }) => <Icon name="add-product" width={64} height={64} />,
            tabBarButton: (props) => <TabBarButton {...props} onPress={openModal} />,
          }}
        />
        <Tab.Screen
          name="RecipesPage"
          component={RecipesPage}
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Icon name="recipes-gradient" width={44} height={44} />
              ) : (
                <Icon name="recipes" width={44} height={44} color={colors.gray90} />
              ),
          }}
        />
        <Tab.Screen
          name="ProfilePage"
          component={ProfilePage}
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Icon name="profile-gradient" width={44} height={44} />
              ) : (
                <Icon name="profile" width={44} height={44} color={colors.gray90} />
              ),
          }}
        />
      </Tab.Navigator>
      <Image
        source={require('@/shared/assets/images/common/tabbar-circle.png')}
        style={styles.circle}
      />
      <ProductFormModal isVisible={isModalVisible} onClose={closeModal} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  circle: {
    position: 'absolute',
    bottom: 58,
    left: width / 2 - 47,
  },
});

export default BottomTabNavigator;
