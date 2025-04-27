// scripts/generate-icon-mapping.js
const fs = require('fs').promises;
const path = require('path');

const commonIconsDir = path.join(__dirname, '../src/shared/assets/icons/common');
const productIconsDir = path.join(__dirname, '../src/shared/assets/icons/product-icons');
const outputFile = path.join(__dirname, '../src/shared/assets/icons/icon-mapping.ts');

async function generateIconMapping() {
  const commonIcons = await fs.readdir(commonIconsDir);
  const productIcons = await fs.readdir(productIconsDir);

  let imports = `import { SvgProps } from 'react-native-svg';\n\n`;
  let definitions = `export const iconDefinitions: Record<string, IconDefinition> = {\n`;

  // Common icons
  for (const file of commonIcons) {
    if (file.endsWith('.svg')) {
      const name = path.basename(file, '.svg');
      const componentName = name.replace(/(^\w|-\w)/g, (m) => m.toUpperCase()).replace(/-/g, '');
      imports += `import ${componentName} from './common/${file}';\n`;
      definitions += `  '${name}': { component: ${componentName}, type: 'common' },\n`;
    }
  }

  // Product and category icons (предполагаем, что иконки категорий тоже в product-icons)
  for (const file of productIcons) {
    if (file.endsWith('.svg')) {
      const name = path.basename(file, '.svg');
      const componentName = name.replace(/(^\w|-\w)/g, (m) => m.toUpperCase()).replace(/-/g, '');
      imports += `import ${componentName} from './product-icons/${file}';\n`;
      const type = name.includes('and-') ? 'category' : 'product'; // Пример: fruits-and-berries → category
      definitions += `  '${name}': { component: ${componentName}, type: '${type}' },\n`;
    }
  }

  definitions += '};\n\n';

  // Product and category name mappings
  const productNameMapping = `export const productNameMapping: Record<string, string> = {
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

  // vegetables
  кабачок: 'zucchini',
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
  'пекинская капуста': 'pekin-cabbage',
  перец: 'pepper',
  картошка: 'potato',
  тыква: 'pumpkin',
  редис: 'radish',
  'красный лук': 'red-onion',
  репа: 'turnip',
  свекла: 'beet',

  // 
  пельмени: 'pelmeni'
};\n\n`;

  const categoryNameMapping = `export const categoryNameMapping: Record<string, string> = {
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
};\n`;

  const content = `
${imports}
type IconComponent = React.FC<SvgProps>;

interface IconDefinition {
  component: IconComponent;
  type: 'common' | 'product' | 'category';
}

${definitions}${productNameMapping}${categoryNameMapping}
`;

  await fs.writeFile(outputFile, content);
  console.log('Icon mapping generated successfully!');
}

generateIconMapping().catch(console.error);
