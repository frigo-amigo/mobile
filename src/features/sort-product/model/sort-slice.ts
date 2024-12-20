import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type SortOption =
  | 'alphabetical'
  | 'quantity-asc'
  | 'quantity-desc'
  | 'expiration-asc'
  | 'expiration-desc';

interface SortState {
  sortOption: SortOption;
}

const initialState: SortState = {
  sortOption: 'alphabetical',
};

const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setSortOption: (state, action: PayloadAction<SortOption>) => {
      state.sortOption = action.payload;
    },
  },
});

export const { setSortOption } = sortSlice.actions;
export default sortSlice.reducer;
