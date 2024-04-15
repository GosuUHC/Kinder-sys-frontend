import { createSlice } from "@reduxjs/toolkit";

const diagnosticsInitialState = {
  selectedCategory: {},
  tableData: [],
};

const diagnostics = createSlice({
  name: "educator",
  initialState: diagnosticsInitialState,
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.selectedCategory;
    },
    setTableData: (state, action) => {
      state.tableData = action.tableData;
    },
  },
});

export const { setSelectedCategory, setTableData } = diagnostics.actions;

export const diagnosticsReducer = diagnostics.reducer;
