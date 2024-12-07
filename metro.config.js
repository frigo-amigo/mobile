const path = require('path');
const { getDefaultConfig } = require('expo/metro-config');
const withStorybook = require('@storybook/react-native/metro/withStorybook');

// Получаем стандартную конфигурацию Expo
const defaultConfig = getDefaultConfig(__dirname);

// Настраиваем обработчик SVG для поддержки импорта SVG файлов как React-компонентов
defaultConfig.transformer = {
  ...defaultConfig.transformer,
  babelTransformerPath: require.resolve('react-native-svg-transformer'),
};

defaultConfig.resolver = {
  ...defaultConfig.resolver,
  assetExts: defaultConfig.resolver.assetExts.filter((ext) => ext !== 'svg'),
  sourceExts: [...defaultConfig.resolver.sourceExts, 'svg', 'ts', 'tsx'],
};

// Поддержка алиасов для путей
// defaultConfig.resolver.extraNodeModules = {
//   '@': path.resolve(__dirname, 'src'),
// };

module.exports = withStorybook(defaultConfig, {
  enabled: true,
  configPath: path.resolve(__dirname, './.storybook'),
  // useJs: true,
});
