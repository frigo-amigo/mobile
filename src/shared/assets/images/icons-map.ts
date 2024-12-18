import { SvgProps } from 'react-native-svg';
import AddPlus from './common/add-plus.svg';
import AddProduct from './common/add-product.svg';
import Checkmark from './common/checkmark.svg';
import Close from './common/close.svg';
import DateCircleGreen from './common/date-circle-green.svg';
import DateCircleOrange from './common/date-circle-orange.svg';
import DateCircleRed from './common/date-circle-red.svg';
import Delete from './common/delete.svg';
import DropdownArrow from './common/dropdown-arrow.svg';
import Edit from './common/edit.svg';
import FilterGradient from './common/filter-gradient.svg';
import Filter from './common/filter.svg';
import FridgeGradient from './common/fridge-gradient.svg';
import Fridge from './common/fridge.svg';
import Minus from './common/minus.svg';
import Plus from './common/plus.svg';
import ProfileGradient from './common/profile-gradient.svg';
import Profile from './common/profile.svg';
import QuantityCircle from './common/quantity-circle.svg';
import RecipesGradient from './common/recipes-gradient.svg';
import Recipes from './common/recipes.svg';
import SearchGradient from './common/search-gradient.svg';
import Search from './common/search.svg';
import ShoppingListGradient from './common/shopping-list-gradient.svg';
import ShoppingList from './common/shopping-list.svg';
import SortGradient from './common/sort-gradient.svg';
import Sort from './common/sort.svg';

import Apple from './product-icons/apple.svg';
import Bread from './product-icons/bread.svg';
import Candies from './product-icons/candies.svg';
import CannedFood from './product-icons/canned-food.svg';
import Cereal from './product-icons/cereal.svg';
import Dairy from './product-icons/dairy.svg';
import Drinks from './product-icons/drinks.svg';
import Eggs from './product-icons/eggs.svg';
import FishAndSeafood from './product-icons/fish-and-seafood.svg';
import FruitsAndBerries from './product-icons/fruits-and-berries.svg';
import MeatAndSausages from './product-icons/meat-and-sausages.svg';
import Nuts from './product-icons/nuts.svg';
import Pepper from './product-icons/pepper.svg';
import Undefined from './product-icons/undefined.svg';
import Potato from './product-icons/potato.svg';
import ProcessedFood from './product-icons/processed-food.svg';
import Sauces from './product-icons/sauces.svg';
import Spices from './product-icons/spices.svg';
import Tomato from './product-icons/tomato.svg';
import Vegetables from './product-icons/vegetables.svg';

export const iconsMap: Record<string, React.FC<SvgProps>> = {
  'add-plus': AddPlus,
  'add-product': AddProduct,
  checkmark: Checkmark,
  close: Close,
  'date-circle-green': DateCircleGreen,
  'date-circle-orange': DateCircleOrange,
  'date-circle-red': DateCircleRed,
  delete: Delete,
  'dropdown-arrow': DropdownArrow,
  edit: Edit,
  'filter-gradient': FilterGradient,
  filter: Filter,
  'fridge-gradient': FridgeGradient,
  fridge: Fridge,
  minus: Minus,
  plus: Plus,
  'profile-gradient': ProfileGradient,
  profile: Profile,
  'quantity-circle': QuantityCircle,
  'recipes-gradient': RecipesGradient,
  recipes: Recipes,
  'search-gradient': SearchGradient,
  search: Search,
  'shopping-list-gradient': ShoppingListGradient,
  'shopping-list': ShoppingList,
  'sort-gradient': SortGradient,
  sort: Sort,

  apple: Apple,
  bread: Bread,
  candies: Candies,
  'canned-food': CannedFood,
  cereal: Cereal,
  dairy: Dairy,
  drinks: Drinks,
  eggs: Eggs,
  'fish-and-seafood': FishAndSeafood,
  fruits: FruitsAndBerries,
  'meat-and-sausages': MeatAndSausages,
  nuts: Nuts,
  pepper: Pepper,
  undefined: Undefined,
  potato: Potato,
  'processed-food': ProcessedFood,
  sauces: Sauces,
  spices: Spices,
  tomato: Tomato,
  vegetables: Vegetables,

  яблоко: Apple,
  'Хлеб и хлебобулочные изделия': Bread,
  'Сладости и десерты': Candies,
  'Консервированные продукты': CannedFood,
  'Крупы и макароны': Cereal,
  'Молочные продукты': Dairy,
  Напитки: Drinks,
  Яйца: Eggs,
  'Рыба и морепродукты': FishAndSeafood,
  'Фрукты и ягоды': FruitsAndBerries,
  'Мясо и колбасы': MeatAndSausages,
  'Орехи и сухофрукты': Nuts,
  'Готовые блюда и полуфабрикаты': ProcessedFood,
  Соусы: Sauces,
  'Специи и приправы': Spices,
  Овощи: Vegetables,
};
