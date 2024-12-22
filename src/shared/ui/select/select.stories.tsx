import type { Meta, StoryObj } from '@storybook/react';
import { View, StyleSheet } from 'react-native';
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
  render: (args) => (
    <View style={styles.centeredContainer}>
      <Select {...args} />
    </View>
  ),
};

export const SelectWithIcon: Story = {
  args: {
    options: ['кг', 'л', 'шт'],
  },
  render: (args) => (
    <View style={styles.centeredContainer}>
      <Select {...args} />
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
