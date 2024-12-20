import React from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { iconsMap } from '@/shared/assets/images/icons-map';
import { SvgProps } from 'react-native-svg';

type IconProps = {
  name: string | null;
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
  if (!name || !iconsMap[name]) {
    console.warn(`Icon "${name}" не найден. Проверьте iconsMap.`);
    return null;
  }

  const SvgIcon = iconsMap[name] as React.FC<SvgProps>;

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
