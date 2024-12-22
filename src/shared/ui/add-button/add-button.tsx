import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { colors } from '../../styles/global';
import Icon from '../icon';
import { CustomText } from '../text';

type AddButtonProps = {
  children: string;
  onPress: () => void;
  style?: any;
};

const AddButton: React.FC<AddButtonProps> = ({ children, onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={style} activeOpacity={0.7}>
      <View style={styles.content}>
        <Icon name={'add-plus'} width={28} height={28} />
        <CustomText size="m" weight="regular" color="grey90" style={styles.text}>
          {children}
        </CustomText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    color: colors.gray90,
    fontSize: 16,
    marginLeft: 10,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AddButton;
