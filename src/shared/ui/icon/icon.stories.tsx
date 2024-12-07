import type { Meta, StoryObj } from '@storybook/react';

import Icon from './icon';

const meta: Meta<typeof Icon> = {
  component: Icon,
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Icon20: Story = {
  args: {
    src: require('../../assets/images/common/edit.svg'),
    width: 20,
    height: 20,
  },
};

export const Icon28: Story = {
  args: { src: require('../../assets/images/common/search.svg'), width: 28, height: 28 },
};

export const Icon40: Story = {
  args: { src: require('../../assets/images/common/list.svg'), width: 40, height: 40 },
};

export const Icon64: Story = {
  args: { src: require('../../assets/images/common/place-product.svg'), width: 64, height: 64 },
};
