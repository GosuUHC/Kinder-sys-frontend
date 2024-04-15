import { createSlice } from "@reduxjs/toolkit";

const recommendationInitialState = {
  selectedCategory: {},
  tableData: [],
};

const recommendation = createSlice({
  name: "recommendation",
  initialState: recommendationInitialState,
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.selectedCategory;
    },
    setTableData: (state, action) => {
      state.tableData = action.tableData;
    },
  },
});

export const { setSelectedCategory, setTableData } = recommendation.actions;

export const recommendationReducer = recommendation.reducer;
