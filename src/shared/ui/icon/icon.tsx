import React from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { iconDefinitions } from '@/shared/assets/icons/icon-mapping';

type IconProps = {
  name: string;
  width?: number;
  height?: number;
  color?: string;
  strokeWidth?: number;
  style?: StyleProp<ViewStyle>;
};

const Icon: React.FC<IconProps> = ({
  name,
  width = 24,
  height = 24,
  color,
  strokeWidth = 1,
  style,
}) => {
  const icon = iconDefinitions[name];
  if (!icon) {
    console.warn(`Icon "${name}" not found.`);
    return null;
  }

  const SvgIcon = icon.component;

  return (
    <View style={[styles.base, { width, height }, style]}>
      <SvgIcon width={width} height={height} stroke={color} strokeWidth={strokeWidth} />
    </View>
  );
};

const styles = StyleSheet.create({
  base: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Icon;
