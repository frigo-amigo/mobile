import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { categories } from '@/shared/data/categories';

interface FilterState {
  selectedCategories: string[];
}

const ALL_CATEGORIES = 'Все продукты';

const initialState: FilterState = {
  selectedCategories: [ALL_CATEGORIES, ...categories],
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    toggleCategory: (state, action: PayloadAction<string>) => {
      const category = action.payload;

      if (category === ALL_CATEGORIES) {
        if (state.selectedCategories.includes(ALL_CATEGORIES)) {
          state.selectedCategories = [];
        } else {
          state.selectedCategories = [ALL_CATEGORIES, ...categories];
        }
      } else {
        const isSelected = state.selectedCategories.includes(category);

        if (isSelected) {
          state.selectedCategories = state.selectedCategories.filter((cat) => cat !== category);
        } else {
          state.selectedCategories.push(category);
        }

        const allSelected = categories.every((cat) => state.selectedCategories.includes(cat));
        if (allSelected) {
          state.selectedCategories = [ALL_CATEGORIES, ...categories];
        }

        if (!allSelected && state.selectedCategories.includes(ALL_CATEGORIES)) {
          state.selectedCategories = state.selectedCategories.filter(
            (cat) => cat !== ALL_CATEGORIES,
          );
        }
      }
    },
  },
});

export const { toggleCategory } = filterSlice.actions;
export default filterSlice.reducer;
