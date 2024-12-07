import { Text, StyleSheet } from 'react-native';
import { colors } from '../../src/shared/styles/global';

type CustomTextProps = {
  children: React.ReactNode;
  size: 'xs' | 's' | 'm' | 'l' | 'xl';
  weight?: 'regular' | 'medium';
  color?: 'grey50' | 'grey90' | 'green' | 'red50' | 'white';
  style?: any;
};

const CustomText: React.FC<CustomTextProps> = ({
  children,
  size,
  weight = 'regular',
  color = 'grey90',
  style,
}) => {
  return (
    <Text style={[styles.base, styles[size], styles[weight], styles[color], style]}>
      {children}
    </Text>
  );
};

export default CustomText;

const styles = StyleSheet.create({
  base: {
    fontFamily: 'Jost_400Regular',
  },
  xs: {
    fontSize: 12,
  },
  s: {
    fontSize: 14,
  },
  m: {
    fontSize: 16,
  },
  l: {
    fontSize: 20,
  },
  xl: {
    fontSize: 32,
  },
  regular: {
    fontWeight: '400',
  },
  medium: {
    fontWeight: '500',
  },
  grey90: {
    color: colors.gray90,
  },
  grey50: {
    color: colors.gray50,
  },
  green: {
    color: colors.green,
  },
  red50: {
    color: colors.red50,
  },
  white: {
    color: colors.white,
  },
});
