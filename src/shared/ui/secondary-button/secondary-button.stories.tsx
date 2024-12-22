import type { Meta, StoryObj } from '@storybook/react';
import { View, StyleSheet } from 'react-native';
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
  render: (args) => (
    <View style={styles.centeredContainer}>
      <SecondaryButton {...args} />
    </View>
  ),
};

export const SecondaryOragne: Story = {
  args: {
    children: 'Отменить',
    color: 'orange',
  },
  render: (args) => (
    <View style={styles.centeredContainer}>
      <SecondaryButton {...args} />
    </View>
  ),
};

export const Disabled: Story = {
  args: {
    children: 'Отменить',
    disabled: true,
    color: 'green',
  },
  render: (args) => (
    <View style={styles.centeredContainer}>
      <SecondaryButton {...args} />
    </View>
  ),
};

const styles = StyleSheet.create({
  centeredContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    paddingTop: 100,
  },
});
