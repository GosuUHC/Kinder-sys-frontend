import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "./config";

export const api = createApi({
  reducerPath: "kinderApi",
  baseQuery: retry(
    fetchBaseQuery({
      baseUrl,
      prepareHeaders: (headers, { getState }) => {
        const role = localStorage.getItem("role");
        const token = localStorage.getItem("token");

        if (role) {
          headers.set("Role", role);
        }

        if (token) {
          headers.set("Token", token);
        }

        return headers;
      },
    }),
    { maxRetries: 10 },
  ),
  endpoints: () => ({}),
});
