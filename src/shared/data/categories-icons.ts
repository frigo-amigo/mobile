import { SvgProps } from 'react-native-svg';
import ProcessedFood from '@/shared/assets/images/product-icons/processed-food.svg';
import Bread from '@/shared/assets/images/product-icons/bread.svg';
import CannedFood from '@/shared/assets/images/product-icons/canned-food.svg';
import Cereal from '@/shared/assets/images/product-icons/cereal.svg';
import Dairy from '@/shared/assets/images/product-icons/dairy.svg';
import MeatAndSausages from '@/shared/assets/images/product-icons/meat-and-sausages.svg';
import Drinks from '@/shared/assets/images/product-icons/drinks.svg';
import Vegetables from '@/shared/assets/images/product-icons/vegetables.svg';
import Nuts from '@/shared/assets/images/product-icons/nuts.svg';
import FishAndSeafood from '@/shared/assets/images/product-icons/fish-and-seafood.svg';
import Candies from '@/shared/assets/images/product-icons/candies.svg';
import Sauces from '@/shared/assets/images/product-icons/sauces.svg';
import Spices from '@/shared/assets/images/product-icons/spices.svg';
import Fruits from '@/shared/assets/images/product-icons/fruits-and-berries.svg';
import Eggs from '@/shared/assets/images/product-icons/eggs.svg';

const categoryIcons: Record<string, string> = {
  // 'Готовые блюда и полуфабрикаты': ProcessedFood,
  // 'Хлеб и хлебобулочные изделия': Bread,
  // 'Консервированные продукты': CannedFood,
  // 'Крупы и макароны': Cereal,
  // 'Молочные продукты': Dairy,
  // 'Мясо и колбасы': MeatAndSausages,
  // Напитки: Drinks,
  // Овощи: Vegetables,
  // 'Орехи и сухофрукты': Nuts,
  // 'Рыба и морепродукты': FishAndSeafood,
  // 'Сладости и десерты': Candies,
  // Соусы: Sauces,
  // 'Специи и приправы': Spices,
  // 'Фрукты и ягоды': Fruits,
  // Яйца: Eggs,
  'Готовые блюда и полуфабрикаты': 'processed-food',
  'Хлеб и хлебобулочные изделия': 'bread',
  'Консервированные продукты': 'canned-food',
  'Крупы и макароны': 'cereal',
  'Молочные продукты': 'dairy',
  'Мясо и колбасы': 'meat-and-sausages',
  Напитки: 'drinks',
  Овощи: 'vegetables',
  'Орехи и сухофрукты': 'nuts',
  'Рыба и морепродукты': 'fish-and-seafood',
  'Сладости и десерты': 'candies',
  Соусы: 'sauces',
  'Специи и приправы': 'spices',
  'Фрукты и ягоды': 'fruits',
  Яйца: 'eggs',
};

export default categoryIcons;
