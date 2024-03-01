import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_APP_URL,
    headers: { Autorization: "wuefoineifh0283" },
  }),
  endpoints: (build) => ({
    getUser: build.query({
      query: () => {
        return {
          url: "/users",
        };
      },
      providesTags: ["get-users"],
    }),
    postUser: build.mutation({
      query: (data) => {
        return {
          url: `/users`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["get-users"],
    }),
    deleteUser: build.mutation({
      query: (id) => {
        return {
          url: `/users/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["get-users"],
    }),
  }),
});

export const { useGetUserQuery, usePostUserMutation, useDeleteUserMutation } =
  userApi;
