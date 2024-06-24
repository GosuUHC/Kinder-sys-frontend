import { createSlice } from "@reduxjs/toolkit";

const statisticsInitialState = {
  year: 2023,
  categoryId: 1,
  groupId: 1,
};

const statistics = createSlice({
  name: "statistics",
  initialState: statisticsInitialState,
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
  },
});

export const { setGroupId, setCategoryId, setYear } = statistics.actions;

export const statisticsReducer = statistics.reducer;
