import { createSlice } from "@reduxjs/toolkit";

const recommendationsInitialState = {
  categoryId: 1,
  groupId: 1,
  recommendationText: "",
};

const recommendations = createSlice({
  name: "recommendations",
  initialState: recommendationsInitialState,
  reducers: {
    setCategoryId: (state, action) => {
      state.categoryId = action.payload;
    },
    setGroupId: (state, action) => {
      state.year = action.payload;
    },
    setRecommendationText: (state, action) => {
      state.recommendationText = action.payload;
    },
  },
});

export const { setCategoryId, setGroupId, setRecommendationText } =
  recommendations.actions;

export const recommendationsReducer = recommendations.reducer;
