import { api } from "./api";

const authExtendedApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query({
      query: () => `auth`,
    }),
    loginUser: build.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
    }),
    regUser: build.mutation({
      query: (data) => ({
        url: "/auth/reg",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const saveUserData = (data) => {
  localStorage.setItem("role", data.role);
  localStorage.setItem("token", data.token);
};

export const clearUserData = () => {
  localStorage.removeItem("role");
  localStorage.removeItem("token");
};

export const isUserLoggedIn = () => {
  return (
    localStorage.getItem("role") !== null &&
    localStorage.getItem("token") !== null
  );
};

export const { useGetUsersQuery, useLoginUserMutation, useRegUserMutation } =
  authExtendedApi;
