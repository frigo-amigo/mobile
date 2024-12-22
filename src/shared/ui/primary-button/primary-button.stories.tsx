import type { Meta, StoryObj } from '@storybook/react';
import { View, StyleSheet } from 'react-native';
import PrimaryButton from './primary-button';

const meta: Meta<typeof PrimaryButton> = {
  component: PrimaryButton,
};

export default meta;
type Story = StoryObj<typeof PrimaryButton>;

export const PrimaryGreen: Story = {
  args: {
    children: 'Добавить в холодильник',
    color: 'green',
  },
  render: (args) => (
    <View style={styles.centeredContainer}>
      <PrimaryButton {...args} />
    </View>
  ),
};

export const PrimaryOragne: Story = {
  args: {
    children: 'Удалить',
    color: 'orange',
  },
  render: (args) => (
    <View style={styles.centeredContainer}>
      <PrimaryButton {...args} />
    </View>
  ),
};

export const Disabled: Story = {
  args: {
    children: 'Продолжить',
    disabled: true,
    color: 'green',
  },
  render: (args) => (
    <View style={styles.centeredContainer}>
      <PrimaryButton {...args} />
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
