import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from '@/shared/ui';
import { colors } from '@/shared/styles/global';
import SortIcon from '@/shared/assets/images/common/sort.svg';
import SortIconGradient from '@/shared/assets/images/common/sort-gradient.svg';

type SortButtonProps = {
  onPress: () => void;
  isActive: boolean;
};
export const SortButton: React.FC<SortButtonProps> = ({ onPress, isActive }) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    {isActive ? (
      <Icon folder="common" name="sort-gradient" width={28} height={28} />
    ) : (
      <Icon folder="common" name="sort" width={28} height={28} color={colors.gray90} />
    )}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    padding: 8,
  },
});
