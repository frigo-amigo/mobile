import type { Meta, StoryObj } from '@storybook/react';
import { View, StyleSheet } from 'react-native';
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
  render: (args) => (
    <View style={styles.centeredContainer}>
      <AddButton {...args} onPress={() => console.log('Add button clicked')} />
    </View>
  ),
};

const styles = StyleSheet.create({
  centeredContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
  },
});
