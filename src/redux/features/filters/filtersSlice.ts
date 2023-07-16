import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { IFilters } from "./filtersInterface";

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
    filterReset: (state) => {
      state.genre = null;
      state.searchTerm = null;
      state.publicationYear = null;
    },
  },
});

export const { setSearchTerm, setGenre, setPublicationYear, filterReset } =
  filtersSlice.actions;

export default filtersSlice.reducer;
