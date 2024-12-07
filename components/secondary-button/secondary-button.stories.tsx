import type { Meta, StoryObj } from '@storybook/react';

import SecondaryButton from './secondary-button';

const meta: Meta<typeof SecondaryButton> = {
  component: SecondaryButton,
};

export default meta;
type Story = StoryObj<typeof SecondaryButton>;

export const SecondaryGreen: Story = {
  args: {
    children: 'Отменить',
    color: 'green',
  },
};

export const SecondaryOragne: Story = {
  args: {
    children: 'Отменить',
    color: 'orange',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Отменить',
    disabled: true,
    color: 'green',
  },
};

export const MinWidth: Story = {
  args: {
    children: 'Отменить',
    color: 'green',
    width: 'min',
  },
};

export const MaxWidth: Story = {
  args: {
    children: 'Отменить',
    color: 'orange',
    width: 'max',
  },
};
