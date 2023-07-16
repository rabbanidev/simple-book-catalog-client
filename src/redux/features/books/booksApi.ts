import { IResponse } from "../../../interface/generic";
import apiSlice from "../api/apiSlice";
import type { IBook, IBooksGetUrlPayload } from "./booksInterface";

const booksApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query<IResponse<IBook[]>, IBooksGetUrlPayload>({
      query: ({ page, limit, searchTerm, genre, publicationYear }) => {
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
      providesTags: ["books"],
    }),
    getBook: builder.query<IResponse<IBook>, string>({
      query: (id) => ({
        url: `/books/${id}`,
      }),
      providesTags: (_result, _error, arg) => [{ type: "books", id: arg }],
    }),
    createBook: builder.mutation<IResponse<IBook>, object>({
      query: (data) => ({
        url: `/books`,
        body: data,
        method: "POST",
      }),
      invalidatesTags: ["books"],
    }),
    editBook: builder.mutation<
      IResponse<IBook>,
      { id: string; data: Partial<IBook> }
    >({
      query: ({ id, data }) => ({
        url: `/books/${id}`,
        body: data,
        method: "PATCH",
      }),
      invalidatesTags: (_undeifined, _error, arg) => [
        { type: "books", id: arg.id },
      ],
    }),
  }),
});

export const { useGetBooksQuery, useGetBookQuery, useCreateBookMutation } =
  booksApi;
export default booksApi;
