/** @type{import("@storybook/react-native").StorybookConfig} */
module.exports = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(ts|tsx|js|jsx)'],
  addons: ['@storybook/addon-ondevice-controls', '@storybook/addon-ondevice-actions'],
};
