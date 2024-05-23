import { api } from "./api";

const diagnosticsExtendedApi = api.injectEndpoints({
  endpoints: (build) => ({
    getDiagnosticsByGroupId: build.query({
      query: (groupId) => `diagnostics/${groupId}`,
    }),
    getDiagnosticsByGroupIdAndCategoryIdAndYear: build.query({
      query: (data) =>
        `diagnostics/groups/${data.groupId}/categories/${data.categoryId}/years/${data.year}`,
    }),
    addDiagnosticsData: build.mutation({
      query: (data) => ({
        url: "/diagnostics",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetDiagnosticsByGroupIdQuery,
  useGetDiagnosticsByGroupIdAndCategoryIdAndYearQuery,
  useAddDiagnosticsDataMutation,
} = diagnosticsExtendedApi;
