import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import config from "../../../config";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: config.base_url,
    // prepareHeaders: (headers, { getState }) => {
    //   const token = (getState() as RootState).auth.token
    //   if (token) {
    //     headers.set('authorization', token)
    //   }
    //   return headers
    // }
  }),
  endpoints: () => ({}),
});

export default apiSlice;
