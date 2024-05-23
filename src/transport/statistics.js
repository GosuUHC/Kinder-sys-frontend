import { api } from "./api";

const statisticsExtendedApi = api.injectEndpoints({
  endpoints: (build) => ({
    getStatisticsByGroupIdAndYear: build.query({
      query: (data) => `statistics/groups/${data.groupId}/years/${data.year}`,
    }),
  }),
});

export const { useGetStatisticsByGroupIdAndYearQuery } = statisticsExtendedApi;
