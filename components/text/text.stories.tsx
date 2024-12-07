import type { Meta, StoryObj } from '@storybook/react';

import CustomText from './text';

const meta: Meta<typeof CustomText> = {
  component: CustomText,
};

export default meta;
type Story = StoryObj<typeof CustomText>;

export const Hello: Story = {
  args: {
    children: 'Добро пожаловать, Иван!',
    size: 'xl',
    weight: 'regular',
    color: 'grey90',
  },
};

export const CategoryTitle: Story = {
  args: {
    children: 'Категории',
    size: 'l',
    weight: 'medium',
    color: 'green',
  },
};

export const SortTitle: Story = {
  args: {
    children: 'Показать сначала',
    size: 'm',
    weight: 'medium',
    color: 'grey90',
  },
};

export const SortItem: Story = {
  args: {
    children: 'По алфавиту',
    size: 'm',
    weight: 'regular',
    color: 'grey90',
  },
};

export const Delete: Story = {
  args: {
    children: 'Удалить',
    size: 'm',
    weight: 'medium',
    color: 'red50',
  },
};

export const DontAskAgain: Story = {
  args: {
    children: 'Больше не спрашивать',
    size: 's',
    weight: 'regular',
    color: 'grey50',
  },
};

export const ProductName: Story = {
  args: {
    children: 'Кабачки',
    size: 'xs',
    weight: 'regular',
    color: 'grey90',
  },
};
