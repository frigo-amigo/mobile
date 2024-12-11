import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { colors } from '../../styles/global';
import { CustomText } from '../text';

type PrimaryButtonProps = {
  children: string;
  onPress: () => void;
  disabled?: boolean;
  color?: 'green' | 'orange';
  width?: 'max' | 'min';
  style?: any;
  isLoading?: boolean;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  onPress,
  disabled = false,
  color = 'green',
  width = 'min',
  style,
  isLoading = false,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || isLoading}
      style={[styles.base, styles[color], styles[width], disabled && styles.disabled, style]}
      activeOpacity={0.7}
    >
      <View style={styles.content}>
        {isLoading ? (
          <ActivityIndicator size="small" color="white" />
        ) : (
          <CustomText
            size="m"
            weight="regular"
            color="white"
            style={[styles.text, disabled && styles.disabledText]}
          >
            {children}
          </CustomText>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  green: {
    backgroundColor: colors.green,
  },
  orange: {
    backgroundColor: colors.orange,
  },
  disabled: {
    backgroundColor: colors.gray10,
    borderColor: colors.gray50,
    borderWidth: 1,
    color: colors.gray50,
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
  disabledText: {
    color: colors.gray50,
  },
  min: {
    alignSelf: 'flex-start',
  },
  max: {
    width: '100%',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default PrimaryButton;
