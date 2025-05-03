
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
import Logo from './common/logo.svg';
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
import Apricot from './product-icons/apricot.svg';
import Banana from './product-icons/banana.svg';
import Beet from './product-icons/beet.svg';
import Bread from './product-icons/bread.svg';
import Broccoli from './product-icons/broccoli.svg';
import Cabbage from './product-icons/cabbage.svg';
import Candies from './product-icons/candies.svg';
import CannedFood from './product-icons/canned-food.svg';
import Carrot from './product-icons/carrot.svg';
import Caulif from './product-icons/caulif.svg';
import Celery from './product-icons/celery.svg';
import Cereal from './product-icons/cereal.svg';
import Cucumber from './product-icons/cucumber.svg';
import Dairy from './product-icons/dairy.svg';
import Drinks from './product-icons/drinks.svg';
import Eggplant from './product-icons/eggplant.svg';
import Eggs from './product-icons/eggs.svg';
import Fig from './product-icons/fig.svg';
import FishAndSeafood from './product-icons/fish-and-seafood.svg';
import FruitsAndBerries from './product-icons/fruits-and-berries.svg';
import Garlic from './product-icons/garlic.svg';
import Grape from './product-icons/grape.svg';
import HotPepper from './product-icons/hot-pepper.svg';
import Kiwi from './product-icons/kiwi.svg';
import Lemon from './product-icons/lemon.svg';
import Mandarin from './product-icons/mandarin.svg';
import Mango from './product-icons/mango.svg';
import MeatAndSausages from './product-icons/meat-and-sausages.svg';
import Melon from './product-icons/melon.svg';
import Nuts from './product-icons/nuts.svg';
import Onion from './product-icons/onion.svg';
import Orange from './product-icons/orange.svg';
import Peach from './product-icons/peach.svg';
import Pear from './product-icons/pear.svg';
import PecinCabbage from './product-icons/pecin-cabbage.svg';
import Pelmeni from './product-icons/pelmeni.svg';
import Pepper from './product-icons/pepper.svg';
import Persimmon from './product-icons/persimmon.svg';
import Plum from './product-icons/plum.svg';
import Potato from './product-icons/potato.svg';
import ProcessedFood from './product-icons/processed-food.svg';
import Pumpkin from './product-icons/pumpkin.svg';
import Radish from './product-icons/radish.svg';
import RedOnion from './product-icons/red-onion.svg';
import Sauces from './product-icons/sauces.svg';
import Spices from './product-icons/spices.svg';
import Strawberry from './product-icons/strawberry.svg';
import Tomato from './product-icons/tomato.svg';
import Turnip from './product-icons/turnip.svg';
import Undefined from './product-icons/undefined.svg';
import Vegetables from './product-icons/vegetables.svg';
import Watermelon from './product-icons/watermelon.svg';
import Zucchini from './product-icons/zucchini.svg';

type IconComponent = React.FC<SvgProps>;

interface IconDefinition {
  component: IconComponent;
  type: 'common' | 'product' | 'category';
}

export const iconDefinitions: Record<string, IconDefinition> = {
  'add-plus': { component: AddPlus, type: 'common' },
  'add-product': { component: AddProduct, type: 'common' },
  'checkmark': { component: Checkmark, type: 'common' },
  'close': { component: Close, type: 'common' },
  'date-circle-green': { component: DateCircleGreen, type: 'common' },
  'date-circle-orange': { component: DateCircleOrange, type: 'common' },
  'date-circle-red': { component: DateCircleRed, type: 'common' },
  'delete': { component: Delete, type: 'common' },
  'dropdown-arrow': { component: DropdownArrow, type: 'common' },
  'edit': { component: Edit, type: 'common' },
  'filter-gradient': { component: FilterGradient, type: 'common' },
  'filter': { component: Filter, type: 'common' },
  'fridge-gradient': { component: FridgeGradient, type: 'common' },
  'fridge': { component: Fridge, type: 'common' },
  'logo': { component: Logo, type: 'common' },
  'minus': { component: Minus, type: 'common' },
  'plus': { component: Plus, type: 'common' },
  'profile-gradient': { component: ProfileGradient, type: 'common' },
  'profile': { component: Profile, type: 'common' },
  'quantity-circle': { component: QuantityCircle, type: 'common' },
  'recipes-gradient': { component: RecipesGradient, type: 'common' },
  'recipes': { component: Recipes, type: 'common' },
  'search-gradient': { component: SearchGradient, type: 'common' },
  'search': { component: Search, type: 'common' },
  'shopping-list-gradient': { component: ShoppingListGradient, type: 'common' },
  'shopping-list': { component: ShoppingList, type: 'common' },
  'sort-gradient': { component: SortGradient, type: 'common' },
  'sort': { component: Sort, type: 'common' },
  'apple': { component: Apple, type: 'product' },
  'apricot': { component: Apricot, type: 'product' },
  'banana': { component: Banana, type: 'product' },
  'beet': { component: Beet, type: 'product' },
  'bread': { component: Bread, type: 'product' },
  'broccoli': { component: Broccoli, type: 'product' },
  'cabbage': { component: Cabbage, type: 'product' },
  'candies': { component: Candies, type: 'product' },
  'canned-food': { component: CannedFood, type: 'product' },
  'carrot': { component: Carrot, type: 'product' },
  'caulif': { component: Caulif, type: 'product' },
  'celery': { component: Celery, type: 'product' },
  'cereal': { component: Cereal, type: 'product' },
  'cucumber': { component: Cucumber, type: 'product' },
  'dairy': { component: Dairy, type: 'product' },
  'drinks': { component: Drinks, type: 'product' },
  'eggplant': { component: Eggplant, type: 'product' },
  'eggs': { component: Eggs, type: 'product' },
  'fig': { component: Fig, type: 'product' },
  'fish-and-seafood': { component: FishAndSeafood, type: 'category' },
  'fruits-and-berries': { component: FruitsAndBerries, type: 'category' },
  'garlic': { component: Garlic, type: 'product' },
  'grape': { component: Grape, type: 'product' },
  'hot-pepper': { component: HotPepper, type: 'product' },
  'kiwi': { component: Kiwi, type: 'product' },
  'lemon': { component: Lemon, type: 'product' },
  'mandarin': { component: Mandarin, type: 'product' },
  'mango': { component: Mango, type: 'product' },
  'meat-and-sausages': { component: MeatAndSausages, type: 'category' },
  'melon': { component: Melon, type: 'product' },
  'nuts': { component: Nuts, type: 'product' },
  'onion': { component: Onion, type: 'product' },
  'orange': { component: Orange, type: 'product' },
  'peach': { component: Peach, type: 'product' },
  'pear': { component: Pear, type: 'product' },
  'pecin-cabbage': { component: PecinCabbage, type: 'product' },
  'pelmeni': { component: Pelmeni, type: 'product' },
  'pepper': { component: Pepper, type: 'product' },
  'persimmon': { component: Persimmon, type: 'product' },
  'plum': { component: Plum, type: 'product' },
  'potato': { component: Potato, type: 'product' },
  'processed-food': { component: ProcessedFood, type: 'product' },
  'pumpkin': { component: Pumpkin, type: 'product' },
  'radish': { component: Radish, type: 'product' },
  'red-onion': { component: RedOnion, type: 'product' },
  'sauces': { component: Sauces, type: 'product' },
  'spices': { component: Spices, type: 'product' },
  'strawberry': { component: Strawberry, type: 'product' },
  'tomato': { component: Tomato, type: 'product' },
  'turnip': { component: Turnip, type: 'product' },
  'undefined': { component: Undefined, type: 'product' },
  'vegetables': { component: Vegetables, type: 'product' },
  'watermelon': { component: Watermelon, type: 'product' },
  'zucchini': { component: Zucchini, type: 'product' },
};

export const productNameMapping: Record<string, string> = {
  // fruits
  яблоко: 'apple',
  банан: 'banana',
  брокколи: 'broccoli',
  абрикос: 'apricot',
  инжир: 'fig',
  виноград: 'grape',
  манго: 'mango',
  апельсин: 'orange',
  персик: 'peach',
  груша: 'pear',
  слива: 'plum',
  киви: 'kiwi',
  лимон: 'lemon',
  мандарин: 'mandarin',
  дыня: 'melon',
  хурма: 'persimmon', 
  клубника: 'strawberry',
  арбуз: 'watermelon',

  // vegetables
  кабачок: 'zucchini',
  кабачки: 'zucchini',
  капуста: 'cabbage',
  морковь: 'carrot',
  'цветная капуста': 'cauliflower',
  сельдерей: 'celery',
  огурец: 'cucumber',
  помидор: 'tomato',
  баклажан: 'eggplant',
  чеснок: 'garlic',
  'острый перец': 'hot-pepper',
  лук: 'onion',
  'пекинская капуста': 'pecin-cabbage',
  перец: 'pepper',
  картошка: 'potato',
  тыква: 'pumpkin',
  редис: 'radish',
  'красный лук': 'red-onion',
  репа: 'turnip',
  свекла: 'beet',

  // 
  пельмени: 'pelmeni'
};

export const categoryNameMapping: Record<string, string> = {
  'Фрукты и ягоды': 'fruits-and-berries',
  Овощи: 'vegetables',
  'Хлеб и хлебобулочные изделия': 'bread',
  'Сладости и десерты': 'candies',
  'Консервированные продукты': 'canned-food',
  'Крупы и макароны': 'cereal',
  'Молочные продукты': 'dairy',
  Напитки: 'drinks',
  Яйца: 'eggs',
  'Рыба и морепродукты': 'fish-and-seafood',
  'Мясо и колбасы': 'meat-and-sausages',
  'Орехи и сухофрукты': 'nuts',
  'Готовые блюда и полуфабрикаты': 'processed-food',
  Соусы: 'sauces',
  'Специи и приправы': 'spices',
};

