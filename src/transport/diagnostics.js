import { api } from "./api";

const educatorExtendedApi = api.injectEndpoints({
  endpoints: (build) => ({
    getDiagnostics: build.query({
      query: (groupId) => `diagnostics/${groupId}`,
    }),
    addDiagnosticsData: build.mutation({
      query: (data) => ({
        url: "/diagnostics",
        method: "POST",
        body: data,
      }),
    }),
    editDiagnosticsData: build.mutation({
      query: (data) => ({
        url: "/diagnostics",
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const { useGetDiagnosticsByGroup } = educatorExtendedApi;