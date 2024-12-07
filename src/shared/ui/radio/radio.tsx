import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { colors } from '../../styles/global';

type RadioProps = {
  selected: boolean;
  onPress: () => void;
  style?: any;
};

const Radio: React.FC<RadioProps> = ({ selected, onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.radio, style]}>
      {selected && <View style={styles.selectedCircle} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  radio: {
    width: 20,
    height: 20,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  selectedCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.orange,
  },
});

export default Radio;
