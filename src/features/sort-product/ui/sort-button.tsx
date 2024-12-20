import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from '@/shared/ui';
import { colors } from '@/shared/styles/global';

type SortButtonProps = {
  onPress: () => void;
  isActive: boolean;
};
export const SortButton: React.FC<SortButtonProps> = ({ onPress, isActive }) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    {isActive ? (
      <Icon name="sort-gradient" width={28} height={28} />
    ) : (
      <Icon name="sort" width={28} height={28} color={colors.gray90} />
    )}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    padding: 8,
  },
});
