import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { colors } from '../../src/shared/styles/global';
import Icon from '../icon';

type SelectProps = {
  options: string[];
  icon?: string;
  onSelect: (value: string) => void;
  defaultOption?: string;
  style?: any;
};

const Select: React.FC<SelectProps> = ({ options, onSelect, defaultOption, style, icon }) => {
  const [selected, setSelected] = useState(defaultOption || options[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
    if (onSelect) {
      onSelect(option);
    }
  };

  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity onPress={() => setIsOpen(!isOpen)} style={styles.select}>
        <Text style={styles.text}>{selected}</Text>
        <Icon src={icon} width={24} height={23} />
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.dropdown}>
          <FlatList
            data={options}
            keyExtractor={(item) => item}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                onPress={() => handleSelect(item)}
                style={[styles.option, index === options.length - 1 && styles.lastOption]}
              >
                <Text style={styles.text}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  select: {
    backgroundColor: colors.gray10,
    maxHeight: 43,
    borderRadius: 5,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdown: {
    backgroundColor: colors.white,
    borderRadius: 5,
    borderColor: colors.gray90,
    borderWidth: 1,
  },
  option: {
    padding: 10,
    borderBottomColor: colors.gray90,
    borderBottomWidth: 1,
  },
  lastOption: {
    borderBottomWidth: 0,
  },
  text: {
    fontSize: 16,
    color: colors.gray90,
  },
});

export default Select;
