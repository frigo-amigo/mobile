import type { Meta, StoryObj } from '@storybook/react';

import PrimaryButton from './primary-button';

const meta: Meta<typeof PrimaryButton> = {
  component: PrimaryButton,
};

export default meta;
type Story = StoryObj<typeof PrimaryButton>;

export const PrimaryGreen: Story = {
  args: {
    children: 'Добавить в холодильник',
    color: 'green',
  },
};

export const PrimaryOragne: Story = {
  args: {
    children: 'Удалить',
    color: 'orange',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Продолжить',
    disabled: true,
    color: 'green',
  },
};

export const MinWidth: Story = {
  args: {
    children: 'Добавить в холодильник',
    color: 'green',
    width: 'min',
  },
};

export const MaxWidth: Story = {
  args: {
    children: 'Удалить',
    color: 'orange',
    width: 'max',
  },
};
