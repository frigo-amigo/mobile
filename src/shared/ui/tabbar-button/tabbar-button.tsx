import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

type TabBarButtonProps = {
  children: React.ReactNode;
  onPress: () => void;
};

const TabBarButton: React.FC<TabBarButtonProps> = ({ children, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 64,
    height: 64,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 10,
    left: 5,
  },
});

export default TabBarButton;
