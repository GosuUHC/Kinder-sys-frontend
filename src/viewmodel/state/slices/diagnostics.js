import { createSlice } from "@reduxjs/toolkit";

const diagnosticsInitialState = {
  groupId: 1,
  categoryId: 1,
  year: 2023,
  newDiagnostics: {
    categoryId: -1,
    childId: -1,
    childGroupId: -1,
    startScore: -1,
    endScore: -1,
    year: -2024,
  },
};

const diagnostics = createSlice({
  name: "diagnostics",
  initialState: diagnosticsInitialState,
  reducers: {
    setGroupId: (state, action) => {
      state.groupId = action.payload;
    },
    setCategoryId: (state, action) => {
      state.categoryId = action.payload;
    },
    setYear: (state, action) => {
      state.year = action.payload;
    },
    setNewDiagnostics: (state, action) => {
      state.newDiagnostics = action.payload;
    },
  },
});

export const { setGroupId, setCategoryId, setYear, setNewDiagnostics } =
  diagnostics.actions;

export const diagnosticsReducer = diagnostics.reducer;
