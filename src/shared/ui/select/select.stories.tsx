import type { Meta, StoryObj } from '@storybook/react';
import Select from './select';

const meta: Meta<typeof Select> = {
  component: Select,
};

export default meta;
type Story = StoryObj<typeof Select>;

export const SelectDefault: Story = {
  args: {
    options: ['кг', 'л', 'шт'],
  },
};

export const SelectWithIcon: Story = {
  args: {
    options: ['кг', 'л', 'шт'],
  },
};
