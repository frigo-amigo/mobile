import type { Meta, StoryObj } from '@storybook/react';
import Input from './input';

const meta: Meta<typeof Input> = {
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const InputDefault: Story = {
  args: {
    placeholder: 'Введите текст',
    value: '',
  },
};

export const InputWithIcon: Story = {
  args: {
    placeholder: 'Введите текст',
    value: '',
    icon: true,
  },
};
