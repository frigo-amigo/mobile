import type { Meta, StoryObj } from '@storybook/react';
import { View, StyleSheet } from 'react-native';
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
  render: (args) => (
    <View style={styles.centeredContainer}>
      <Radio {...args} />
    </View>
  ),
};

export const RadioSelected: Story = {
  args: {
    selected: true,
  },
  render: (args) => (
    <View style={styles.centeredContainer}>
      <Radio {...args} />
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
