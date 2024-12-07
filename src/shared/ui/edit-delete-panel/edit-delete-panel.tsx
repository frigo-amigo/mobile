import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { CustomText } from '../text';
import { colors } from '@/shared/styles/global';
import Icon from '../icon';

interface EditDeletePanelProps {
  onEdit: () => void;
  onDelete: () => void;
}

const EditDeletePanel: React.FC<EditDeletePanelProps> = ({ onEdit, onDelete }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onEdit}>
        <CustomText size="m" weight="regular" color="grey90">
          Изменить
        </CustomText>
        <Icon name="edit" width={20} height={20} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onDelete}>
        <CustomText size="m" weight="regular" color="red50">
          Удалить
        </CustomText>
        <Icon name="delete" width={20} height={20} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    elevation: 5,
    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    gap: 10,
  },
});

export default EditDeletePanel;
