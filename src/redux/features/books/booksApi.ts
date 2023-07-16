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
        genre,
        publicationYear,
      }: {
        page: string;
        limit: number;
        searchTerm: string;
        genre: string;
        publicationYear: number;
      }) => {
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
  }),
});

export const { useGetBooksQuery } = booksApi;
export default booksApi;
