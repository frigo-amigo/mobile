import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from '@/shared/ui';
import { colors } from '@/shared/styles/global';

type FilterButtonProps = {
  onPress: () => void;
  isActive: boolean;
};
export const FilterButton: React.FC<FilterButtonProps> = ({ onPress, isActive }) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    {isActive ? (
      <Icon folder="common" name="filter-gradient" width={28} height={28} />
    ) : (
      <Icon folder="common" name="filter" width={28} height={28} color={colors.gray90} />
    )}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    padding: 8,
  },
});
