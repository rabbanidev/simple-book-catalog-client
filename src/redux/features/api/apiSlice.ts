import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import config from "../../../config";
import { RootState } from "../../app/store";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: config.base_url,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.user.accessToken;
      if (token) {
        headers.set("authorization", token);
      }
      return headers;
    },
  }),
  tagTypes: ["reviews", "books", "genreOptions", "publicationYears"],
  endpoints: () => ({}),
});

export default apiSlice;
