import type { Meta, StoryObj } from '@storybook/react';

import AddButton from './add-button';

const meta: Meta<typeof AddButton> = {
  component: AddButton,
};

export default meta;
type Story = StoryObj<typeof AddButton>;

export const AddCategory: Story = {
  args: {
    children: 'Новая категория',
  },
};
