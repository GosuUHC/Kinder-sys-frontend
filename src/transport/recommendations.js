import { api } from "./api";

const recommendationExtendedApi = api.injectEndpoints({
  endpoints: (build) => ({
    getRecommendations: build.query({
      query: (categoryId) => `recommendations/${categoryId}`,
    }),
    addRecommendation: build.mutation({
      query: (data) => ({
        url: "/recommendations",
        method: "POST",
        body: data,
      }),
    }),
    editRecommendation: build.mutation({
      query: (data) => ({
        url: "/recommendations",
        method: "PUT",
        body: data,
      }),
    }),
    deleteRecommendations: build.query({
      query: (recommendationId) => `recommendations/${recommendationId}`,
    }),
  }),
});

export const { useGetDiagnosticsByGroup } = recommendationExtendedApi;
