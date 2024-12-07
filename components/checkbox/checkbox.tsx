import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { colors } from '../../src/shared/styles/global';
import Icon from '../icon';

type CheckboxProps = {
  checked: boolean;
  onPress: () => void;
  style?: any;
  checkIcon?: any;
};

const Checkbox: React.FC<CheckboxProps> = ({ checked, onPress, style, checkIcon }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.checkbox, style, checked && styles.checked]}>
      {checked && <Icon src={checkIcon} width={16} height={16} style={styles.icon} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: colors.orange,
    borderRadius: 5,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    backgroundColor: colors.white,
  },
  icon: {
    color: colors.orange,
  },
});

export default Checkbox;
