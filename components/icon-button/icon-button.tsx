import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { colors } from '../../src/shared/styles/global';
import Icon from '../icon';

type IconButtonProps = {
  children: React.ReactNode;
  src: any;
  onPress: () => void;
  style?: any;
};

const IconButton: React.FC<IconButtonProps> = ({ children, onPress, style, src }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.base, style]} activeOpacity={0.7}>
      <View style={styles.content}>
        <Icon src={src} width={23} height={23} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    borderRadius: 5,
    backgroundColor: colors.green,
    paddingVertical: 10,
    width: 43,
    height: 43,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default IconButton;
