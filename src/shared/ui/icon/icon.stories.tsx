import type { Meta, StoryObj } from '@storybook/react';
import { View, StyleSheet } from 'react-native';
import Icon from './icon';

const meta: Meta<typeof Icon> = {
  component: Icon,
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Icon20: Story = {
  args: {
    name: 'edit',
    width: 20,
    height: 20,
  },
  render: (args) => (
    <View style={styles.centeredContainer}>
      <Icon {...args} />
    </View>
  ),
};

export const Icon28: Story = {
  args: { name: 'search', width: 28, height: 28 },
  render: (args) => (
    <View style={styles.centeredContainer}>
      <Icon {...args} />
    </View>
  ),
};

export const Icon40: Story = {
  args: { name: 'shopping-list', width: 40, height: 40 },
  render: (args) => (
    <View style={styles.centeredContainer}>
      <Icon {...args} />
    </View>
  ),
};

export const Icon64: Story = {
  args: { name: 'add-product', width: 64, height: 64 },
  render: (args) => (
    <View style={styles.centeredContainer}>
      <Icon {...args} />
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
