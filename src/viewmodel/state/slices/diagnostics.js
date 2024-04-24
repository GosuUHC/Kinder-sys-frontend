import { createSlice } from "@reduxjs/toolkit";

const diagnosticsInitialState = {
  selectedCategory: {},
  selectedGroupId: 1,
};

const diagnostics = createSlice({
  name: "educator",
  initialState: diagnosticsInitialState,
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.selectedCategory;
    },
    setSelectedGroupId: (state, action) => {
      state.selectedGroupId = action.selectedGroupId;
    },
  },
});

export const { setSelectedCategory, setSelectedGroupId } = diagnostics.actions;

export const diagnosticsReducer = diagnostics.reducer;
