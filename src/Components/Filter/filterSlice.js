import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: {
    ratings: 0,
    priceMinimum: 0,
    priceMaximum: 1000,

    type: [],
    genres: [],
  },
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeMinPrice: (state, action) => {
      state.filters.priceMinimum = action.payload;
    },

    changeMaxPrice: (state, action) => {
      state.filters.priceMaximum = action.payload;
    },

    changeRatings: (state, action) => {
      const rating = action.payload;

      state.filters.ratings = Math.min(...rating);
    },

    changeType: (state, action) => {
      state.filters.type = action.payload;
    },

    changeGenres: (state, action) => {
      state.filters.genres = action.payload;
    },

    setFilters: (state, action) => {
      state.filters = action.payload;
    },
  },
});

export const {
  changeMaxPrice,
  changeMinPrice,
  changeRatings,
  changeType,
  changeGenres,
} = filterSlice.actions;

export default filterSlice.reducer;
