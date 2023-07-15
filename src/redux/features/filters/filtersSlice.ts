import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type IFilters = {
  searchTerm: string | null;
  genre: string | null;
  publicationYear: number | null;
};

const initialState: IFilters = {
  searchTerm: null,
  genre: null,
  publicationYear: null,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    setGenre: (state, action: PayloadAction<string>) => {
      state.genre = action.payload;
    },
    setPublicationYear: (state, action: PayloadAction<number>) => {
      state.publicationYear = action.payload;
    },
  },
});

export const { setSearchTerm, setGenre, setPublicationYear } =
  filtersSlice.actions;

export default filtersSlice.reducer;
