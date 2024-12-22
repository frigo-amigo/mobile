import type { Meta, StoryObj } from '@storybook/react';
import { View, StyleSheet } from 'react-native';
import Input from './input';

const meta: Meta<typeof Input> = {
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const InputDefault: Story = {
  args: {
    placeholder: 'Введите текст',
    value: '',
  },
  render: (args) => (
    <View style={styles.centeredContainer}>
      <Input {...args} />
    </View>
  ),
};

export const InputWithIcon: Story = {
  args: {
    placeholder: 'Введите текст',
    value: '',
  },
  render: (args) => (
    <View style={styles.centeredContainer}>
      <Input {...args} />
    </View>
  ),
};

const styles = StyleSheet.create({
  centeredContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingTop: 100,
    maxWidth: 300,
  },
});
