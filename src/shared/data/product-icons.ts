import { SvgProps } from 'react-native-svg';
import Apple from '@/shared/assets/images/product-icons/apple.svg';

const productIcons: Record<string, React.FC<SvgProps>> = {
  яблоко: Apple,
};

export default productIcons;
