import React, { useRef } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/app/store';
import { setSortOption } from '../model/sort-slice';
import { SortOptions } from '@/shared/data/sort-options';
import { CustomText, Radio } from '@/shared/ui';
import { colors } from '@/shared/styles/global';

const sortOptions = SortOptions;

type SortPanelProps = {
  isVisible: boolean;
  onClose: () => void;
};

export const SortPanel: React.FC<SortPanelProps> = ({ isVisible, onClose }) => {
  const dispatch = useDispatch();
  const selectedSortOption = useSelector((state: RootState) => state.sort.sortOption);

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
      snapPoints={['40%']}
      onDismiss={onClose}
    >
      <BottomSheetView style={styles.container}>
        <CustomText size="m" weight="medium" color="grey90" style={styles.header}>
          Показать сначала
        </CustomText>

        {sortOptions.map((option) => (
          <TouchableOpacity
            key={option.value}
            onPress={() => {
              dispatch(setSortOption(option.value as any));
            }}
            style={[styles.option]}
          >
            <Radio
              selected={option.value === selectedSortOption}
              onPress={() => dispatch(setSortOption(option.value as any))}
              style={styles.radio}
            />
            <CustomText size="m" weight="regular" color="grey90">
              {option.label}
            </CustomText>
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
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  radio: {
    marginRight: 10,
  },
});
