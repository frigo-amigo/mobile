import { SvgProps } from 'react-native-svg';

// Fruits
import Apple from '@/shared/assets/images/product-icons/apple.svg';
import Apricot from '@/shared/assets/images/product-icons/apricot.svg';
import Banana from '@/shared/assets/images/product-icons/banana.svg';
import Fig from '@/shared/assets/images/product-icons/fig.svg';
import Grape from '@/shared/assets/images/product-icons/grape.svg';
import Mango from '@/shared/assets/images/product-icons/mango.svg';
import Orange from '@/shared/assets/images/product-icons/orange.svg';
import Peach from '@/shared/assets/images/product-icons/peach.svg';
import Pear from '@/shared/assets/images/product-icons/pear.svg';
import Plum from '@/shared/assets/images/product-icons/plum.svg';

// Vegetables
import Broccoli from '@/shared/assets/images/product-icons/broccoli.svg';
import Cabachok from '@/shared/assets/images/product-icons/cabachok.svg';
import Cabbage from '@/shared/assets/images/product-icons/cabbage.svg';
import Carrot from '@/shared/assets/images/product-icons/carrot.svg';
import Caulif from '@/shared/assets/images/product-icons/caulif.svg';
import Celery from '@/shared/assets/images/product-icons/celery.svg';
import Cucumber from '@/shared/assets/images/product-icons/cucumber.svg';
import Eggplant from '@/shared/assets/images/product-icons/eggplant.svg';
import Garlic from '@/shared/assets/images/product-icons/garlic.svg';
import HotPepper from '@/shared/assets/images/product-icons/hot-pepper.svg';
import Onion from '@/shared/assets/images/product-icons/onion.svg';
import PecinCabbage from '@/shared/assets/images/product-icons/pecin-cabbage.svg';
import Pepper from '@/shared/assets/images/product-icons/pepper.svg';
import Potato from '@/shared/assets/images/product-icons/potato.svg';
import Pumpkin from '@/shared/assets/images/product-icons/pumpkin.svg';
import Radish from '@/shared/assets/images/product-icons/radish.svg';
import RedOnion from '@/shared/assets/images/product-icons/red-onion.svg';
import Repa from '@/shared/assets/images/product-icons/repa.svg';
import Svekla from '@/shared/assets/images/product-icons/svekla.svg';
import Tomato from '@/shared/assets/images/product-icons/tomato.svg';

const productIcons: Record<string, React.FC<SvgProps>> = {
  // Fruits
  яблоко: Apple,
  абрикос: Apricot,
  банан: Banana,
  инжир: Fig,
  виноград: Grape,
  манго: Mango,
  апельсин: Orange,
  персик: Peach,
  груша: Pear,
  слива: Plum,

  // Vegetables
  брокколи: Broccoli,
  кабачок: Cabachok,
  капуста: Cabbage,
  морковь: Carrot,
  'цветная капуста': Caulif,
  сельдерей: Celery,
  огурец: Cucumber,
  помидор: Tomato,
  баклажан: Eggplant,
  чеснок: Garlic,
  'острый перец': HotPepper,
  лук: Onion,
  'пекинская капуста': PecinCabbage,
  перец: Pepper,
  картошка: Potato,
  тыква: Pumpkin,
  редис: Radish,
  'красный лук': RedOnion,
  репа: Repa,
  свекла: Svekla,
};

export default productIcons;
