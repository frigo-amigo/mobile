import type { Meta, StoryObj } from '@storybook/react';
import { View, StyleSheet } from 'react-native';
import CustomText from './text';

const meta: Meta<typeof CustomText> = {
  component: CustomText,
};

export default meta;
type Story = StoryObj<typeof CustomText>;

export const Hello: Story = {
  args: {
    children: 'Добро пожаловать, Иван!',
    size: 'xl',
    weight: 'regular',
    color: 'grey90',
  },
  render: (args) => (
    <View style={styles.centeredContainer}>
      <CustomText {...args} />
    </View>
  ),
};

export const CategoryTitle: Story = {
  args: {
    children: 'Категории',
    size: 'l',
    weight: 'medium',
    color: 'green',
  },
  render: (args) => (
    <View style={styles.centeredContainer}>
      <CustomText {...args} />
    </View>
  ),
};

export const SortTitle: Story = {
  args: {
    children: 'Показать сначала',
    size: 'm',
    weight: 'medium',
    color: 'grey90',
  },
  render: (args) => (
    <View style={styles.centeredContainer}>
      <CustomText {...args} />
    </View>
  ),
};

export const SortItem: Story = {
  args: {
    children: 'По алфавиту',
    size: 'm',
    weight: 'regular',
    color: 'grey90',
  },
  render: (args) => (
    <View style={styles.centeredContainer}>
      <CustomText {...args} />
    </View>
  ),
};

export const Delete: Story = {
  args: {
    children: 'Удалить',
    size: 'm',
    weight: 'medium',
    color: 'red50',
  },
  render: (args) => (
    <View style={styles.centeredContainer}>
      <CustomText {...args} />
    </View>
  ),
};

export const DontAskAgain: Story = {
  args: {
    children: 'Больше не спрашивать',
    size: 's',
    weight: 'regular',
    color: 'grey50',
  },
  render: (args) => (
    <View style={styles.centeredContainer}>
      <CustomText {...args} />
    </View>
  ),
};

export const ProductName: Story = {
  args: {
    children: 'Кабачки',
    size: 'xs',
    weight: 'regular',
    color: 'grey90',
  },
  render: (args) => (
    <View style={styles.centeredContainer}>
      <CustomText {...args} />
    </View>
  ),
};

const styles = StyleSheet.create({
  centeredContainer: {
    alignItems: 'center',
    paddingTop: 100,
  },
});
