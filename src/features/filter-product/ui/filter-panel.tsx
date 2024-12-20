import React, { useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { categories } from '@/shared/data/categories';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/app/store';
import { toggleCategory } from '../model/filter-slice';
import Checkbox from '@/shared/ui/checkbox';
import { colors } from '@/shared/styles/global';
import { CustomText, Icon } from '@/shared/ui';
import { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet';

type FilterPanelProps = {
  isVisible: boolean;
  onClose: () => void;
};

export const FilterPanel: React.FC<FilterPanelProps> = ({ isVisible, onClose }) => {
  const dispatch = useDispatch();
  const selectedCategories = useSelector((state: RootState) => state.filter.selectedCategories);

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  React.useEffect(() => {
    if (isVisible) {
      bottomSheetModalRef.current?.present();
    } else {
      bottomSheetModalRef.current?.close();
    }
  }, [isVisible]);

  return (
    <BottomSheetModal
      handleComponent={() => (
        <View style={styles.handleContainer}>
          <View style={styles.handle} />
        </View>
      )}
      ref={bottomSheetModalRef}
      snapPoints={['50%']}
      onDismiss={onClose}
    >
      <BottomSheetView style={styles.container}>
        <CustomText size="m" weight="medium" color="grey90" style={styles.header}>
          Показать категории
        </CustomText>

        {categories.map((category) => (
          <TouchableOpacity key={category} onPress={() => dispatch(toggleCategory(category))}>
            <View key={category} style={styles.optionContainer}>
              <Checkbox
                checked={selectedCategories.includes(category)}
                onPress={() => dispatch(toggleCategory(category))}
              />
              <CustomText size="m" weight="regular" color="grey90" style={styles.optionText}>
                {category}
              </CustomText>
            </View>
          </TouchableOpacity>
        ))}
      </BottomSheetView>
    </BottomSheetModal>
  );
};

const styles = StyleSheet.create({
  handleContainer: {
    alignItems: 'center',
    paddingTop: 10,
    backgroundColor: colors.gray10,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  handle: {
    width: 40,
    height: 4,
    backgroundColor: colors.gray30,
    borderRadius: 2,
  },
  container: {
    width: '100%',
    backgroundColor: colors.gray10,
    padding: 16,
    paddingBottom: 6,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  optionText: {
    marginLeft: 10,
  },
});

export default FilterPanel;
