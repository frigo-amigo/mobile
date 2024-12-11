import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { colors } from '../../styles/global';
import Icon from '../icon';
import DropdownArrow from '@/shared/assets/images/common/dropdown-arrow.svg';
import { CustomText } from '../text';

type SelectProps = {
  options: string[];
  onSelect: (value: string) => void;
  defaultOption?: string;
  style?: any;
  label?: string;
};

const Select: React.FC<SelectProps> = ({ options, onSelect, defaultOption, style, label }) => {
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
      {label && (
        <CustomText size="xs" weight="regular" color="grey90" style={styles.label}>
          {label}
        </CustomText>
      )}
      <TouchableOpacity onPress={() => setIsOpen(!isOpen)} style={styles.select}>
        <Text style={styles.text}>{selected}</Text>
        <Icon name="dropdown-arrow" width={24} height={23} />
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
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdown: {
    position: 'absolute',
    top: 43,
    width: '100%',
    backgroundColor: colors.white,
    borderRadius: 5,
    borderColor: colors.gray90,
    borderWidth: 1,
    maxHeight: 320,
    zIndex: 1,
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
  label: {
    position: 'absolute',
    top: -17,
    lineHeight: 17,
  },
});

export default Select;
