import { IResponse } from "../../../interface/generic";
import apiSlice from "../api/apiSlice";
import type { IBook, IBooksGetUrlPayload } from "./booksInterface";

const booksApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query<IResponse<IBook[]>, object>({
      query: ({
        page,
        limit,
        searchTerm,
        genre,
        publicationYear,
      }: IBooksGetUrlPayload) => {
        let url = `/books?page=${page}&limit=${limit}`;
        if (searchTerm) {
          url += `&searchTerm=${searchTerm}`;
        }
        if (genre) {
          url += `&genre=${genre}`;
        }
        if (publicationYear) {
          url += `&publicationYear=${publicationYear}`;
        }

        return {
          url: url,
        };
      },
    }),
    getBook: builder.query<IResponse<IBook>, string>({
      query: (id) => ({
        url: `/books/${id}`,
      }),
    }),
  }),
});

export const { useGetBooksQuery, useGetBookQuery } = booksApi;
export default booksApi;
