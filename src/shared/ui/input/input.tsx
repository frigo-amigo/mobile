import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, TextInputProps } from 'react-native';
import { colors } from '../../styles/global';
import Icon from '../icon';
import CloseIcon from '@/shared/assets/images/common/close.svg';
import { CustomText } from '../text';

type InputProps = {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  onClear?: () => void; // Новый пропс для действия кнопки "очистить"
  style?: any;
  showClearButton?: boolean; // Указывает, нужно ли показывать крестик
  label?: string;
  keyboardType?: TextInputProps['keyboardType'];
  editable?: boolean;
};

const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  onChangeText,
  onClear,
  style,
  showClearButton,
  label,
  keyboardType = 'default',
  editable = true,
}) => {
  return (
    <View style={styles.container}>
      {label && (
        <CustomText size="xs" weight="regular" color="grey90" style={styles.label}>
          {label}
        </CustomText>
      )}
      <TextInput
        style={[styles.input, style]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={colors.gray50}
        keyboardType={keyboardType}
        editable={editable}
      />
      {showClearButton && value && (
        <TouchableOpacity onPress={onClear} style={styles.clearButton}>
          <Icon name="close" width={28} height={28} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.gray10,
    borderRadius: 5,
  },
  input: {
    width: '100%',
    flex: 1,
    fontSize: 16,
    color: colors.gray90,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  clearButton: {
    marginRight: 10,
  },
  label: {
    position: 'absolute',
    top: -17,
    lineHeight: 17,
  },
});

export default Input;
