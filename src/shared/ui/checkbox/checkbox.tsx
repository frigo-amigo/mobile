import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { colors } from '../../styles/global';
import Icon from '../icon';
import CheckIcon from '@/shared/assets/images/common/checkmark.svg';

type CheckboxProps = {
  checked: boolean;
  onPress: () => void;
  style?: any;
};

const Checkbox: React.FC<CheckboxProps> = ({ checked, onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.checkbox, style, checked && styles.checked]}>
      {checked && <Icon src={CheckIcon} width={16} height={16} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 5,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.orange,
  },
  icon: {
    color: colors.orange,
  },
});

export default Checkbox;
