import { IResponse } from "../../../interface/generic";
import apiSlice from "../api/apiSlice";

const filtersAPi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBooksOptions: builder.query<IResponse<string[]>, undefined>({
      query: () => ({
        url: "/filters/books/genres",
      }),
      providesTags: ["genreOptions"],
    }),
    getYearOptions: builder.query<IResponse<number[]>, undefined>({
      query: () => ({
        url: "/filters/books/years",
      }),
      providesTags: ["publicationYears"],
    }),
  }),
});

export const { useGetBooksOptionsQuery, useGetYearOptionsQuery } = filtersAPi;
export default filtersAPi;
