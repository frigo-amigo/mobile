import type { Meta, StoryObj } from '@storybook/react';

import IconButton from './icon-button';

const meta: Meta<typeof IconButton> = {
  component: IconButton,
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const PlusButton: Story = {
  args: {
    src: 'plus',
  },
};

export const MinusButton: Story = {
  args: {
    src: 'minus',
  },
};
