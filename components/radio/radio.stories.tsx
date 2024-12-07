import type { Meta, StoryObj } from '@storybook/react';

import Radio from './radio';

const meta: Meta<typeof Radio> = {
  component: Radio,
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const RadioDefault: Story = {
  args: {
    selected: false,
  },
};

export const RadioSelected: Story = {
  args: {
    selected: true,
  },
};
