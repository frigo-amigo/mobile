import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { categories } from '@/shared/data/categories';
import { allProducts } from '@/shared/data/data';

interface FilterState {
  selectedCategories: string[];
  allProducts: typeof allProducts; // Список всех продуктов
}

const ALL_CATEGORIES = 'Все продукты';

const initialState: FilterState = {
  selectedCategories: [ALL_CATEGORIES, ...categories],
  allProducts,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    toggleCategory: (state, action: PayloadAction<string>) => {
      const category = action.payload;

      if (category === ALL_CATEGORIES) {
        // Установка или снятие всех галочек
        if (state.selectedCategories.includes(ALL_CATEGORIES)) {
          state.selectedCategories = []; // Снимаем все галочки
        } else {
          state.selectedCategories = [ALL_CATEGORIES, ...categories]; // Выбираем все
        }
      } else {
        const isSelected = state.selectedCategories.includes(category);

        // Добавление или удаление категории
        if (isSelected) {
          state.selectedCategories = state.selectedCategories.filter((cat) => cat !== category);
        } else {
          state.selectedCategories.push(category);
        }

        // Если все категории выбраны вручную, добавляем "Все продукты"
        const allSelected = categories.every((cat) => state.selectedCategories.includes(cat));
        if (allSelected) {
          state.selectedCategories = [ALL_CATEGORIES, ...categories];
        }

        // Если убираем галочку с одной категории, убираем "Все продукты"
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
