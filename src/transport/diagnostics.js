import { api } from "./api";

const diagnosticsExtendedApi = api.injectEndpoints({
  endpoints: (build) => ({
    getDiagnosticsByGroupId: build.query({
      query: (groupId) => `diagnostics/${groupId}`,
    }),
    getDiagnosticsByGroupIdAndYear: build.query({
      query: (data) => `diagnostics/groups/${data.groupId}/years/${data.year}`,
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
    deleteDiagnosticsData: build.mutation({
      query: (data) => ({
        url: `/diagnostics/ids/${data.id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetDiagnosticsByGroupIdQuery,
  useGetDiagnosticsByGroupIdAndYearQuery,
  useGetDiagnosticsByGroupIdAndCategoryIdAndYearQuery,
  useAddDiagnosticsDataMutation,
  useDeleteDiagnosticsDataMutation,
} = diagnosticsExtendedApi;
