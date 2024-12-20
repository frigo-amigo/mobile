import React, { useState } from 'react';
import { View, StyleSheet, Modal } from 'react-native';

import { colors } from '@/shared/styles/global';
import { Checkbox, CustomText, PrimaryButton, SecondaryButton } from '@/shared/ui';

interface ConfirmDeleteModalProps {
  productName: string;
  onCancel: () => void;
  onConfirm: () => void;
}

const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({
  productName,
  onCancel,
  onConfirm,
}) => {
  const [dontAskAgain, setDontAskAgain] = useState(false);

  return (
    <Modal transparent={true} animationType="fade" visible={true}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <CustomText size="m" weight="regular" color="grey90" style={styles.title}>
            Вы точно хотите удалить продукт "{productName}" из вашего холодильника?
          </CustomText>
          <View style={styles.checkboxContainer}>
            <Checkbox
              checked={dontAskAgain}
              onPress={() => setDontAskAgain(!dontAskAgain)}
              style={styles.checkbox}
            />
            <CustomText size="s" weight="regular" color="grey50" style={styles.checkboxText}>
              Больше не спрашивать
            </CustomText>
          </View>

          <View style={styles.buttonsContainer}>
            <SecondaryButton
              onPress={() => onCancel()}
              children="Отменить"
              color={'green'}
              style={{ width: '45%' }}
            />
            <PrimaryButton
              onPress={() => onConfirm()}
              children="Удалить"
              color={'orange'}
              style={{ width: '45%' }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
  },
  modalContent: {
    backgroundColor: colors.white,
    padding: 20,
    width: '80%',
    borderRadius: 5,
    alignItems: 'center',
  },
  title: {
    marginBottom: 20,
    textAlign: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    left: -40,
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    borderWidth: 1,
    borderColor: colors.orange,
  },
  checkboxText: {
    marginLeft: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  cancelButton: {
    backgroundColor: colors.gray10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ConfirmDeleteModal;
