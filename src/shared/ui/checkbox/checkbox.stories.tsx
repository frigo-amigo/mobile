import type { Meta, StoryObj } from '@storybook/react';
import { View, StyleSheet } from 'react-native';
import Checkbox from './checkbox';

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Unchecked: Story = {
  args: {
    checked: false,
  },
  render: (args) => (
    <View style={styles.container}>
      <Checkbox {...args} />
    </View>
  ),
};

export const Checked: Story = {
  args: {
    checked: true,
  },
  render: (args) => (
    <View style={styles.container}>
      <Checkbox {...args} />
    </View>
  ),
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
  },
});
