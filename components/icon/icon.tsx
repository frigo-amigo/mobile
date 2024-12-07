import { View, Image, StyleSheet } from 'react-native';

type IconProps = {
  src: any;
  width?: number;
  height?: number;
  style?: any;
};

const Icon: React.FC<IconProps> = ({ src, width, height, style }) => {
  return (
    <View
      style={[
        styles.base,
        {
          width: width,
          height: height,
        },
        style,
      ]}
    >
      <Image source={src} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  base: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default Icon;
