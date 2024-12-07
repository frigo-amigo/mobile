import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { colors } from '../../src/shared/styles/global';
import Icon from '../icon';

type InputProps = {
  placeholder?: string;
  value?: string;
  onChangeText: (text: string) => void;
  style?: any;
  icon?: boolean;
};

const Input: React.FC<InputProps> = ({ placeholder, value, onChangeText, style, icon }) => {
  return (
    <View style={styles.content}>
      <TextInput
        style={[styles.input, style]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={colors.gray50}
      />
      {icon === true && <Icon src={require('../../assets/images/common/dropdown-arrow.svg')} />}
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    backgroundColor: colors.gray10,
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    color: colors.gray90,
  },
});

export default Input;
