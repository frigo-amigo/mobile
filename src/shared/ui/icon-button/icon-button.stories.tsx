import type { Meta, StoryObj } from '@storybook/react';
import { View, StyleSheet } from 'react-native';
import IconButton from './icon-button';

const meta: Meta<typeof IconButton> = {
  component: IconButton,
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const PlusButton: Story = {
  args: {
    src: 'plus',
  },
  render: (args) => (
    <View style={styles.centeredContainer}>
      <IconButton {...args} onPress={() => console.log('Plus button clicked')} />
    </View>
  ),
};

export const MinusButton: Story = {
  args: {
    src: 'minus',
  },
  render: (args) => (
    <View style={styles.centeredContainer}>
      <IconButton {...args} onPress={() => console.log('Minus button clicked')} />
    </View>
  ),
};

const styles = StyleSheet.create({
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
  },
});
