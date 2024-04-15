import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "";

export const api = createApi({
  reducerPath: "kinderApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: () => ({}),
});
