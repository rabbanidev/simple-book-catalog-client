import { IResponse } from "../../../interface/generic";
import apiSlice from "../api/apiSlice";
import type { IBook } from "./booksInterface";

const booksApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query<IResponse<IBook[]>, object>({
      query: ({
        page,
        limit,
        searchTerm,
      }: {
        page: string;
        limit: number;
        searchTerm: string;
      }) => {
        let url = `/books?page=${page}&limit=${limit}`;
        if (searchTerm) {
          url += `&searchTerm=${searchTerm}`;
        }

        return {
          url: url,
        };
      },
    }),
  }),
});

export const { useGetBooksQuery } = booksApi;
export default booksApi;
