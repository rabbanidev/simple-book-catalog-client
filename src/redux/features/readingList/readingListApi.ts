import apiSlice from "../api/apiSlice";
import type { IResponse } from "../../../interface/generic";
import { IReadingList } from "./readingListInterface";

const readingListApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getReadingList: builder.query<IResponse<IReadingList[]>, undefined>({
      query: () => ({
        url: "/reading-list",
      }),
      providesTags: ["readingList"],
    }),
    addReadingList: builder.mutation<IResponse<IReadingList>, object>({
      query: (data) => ({
        url: "/reading-list/add",
        body: data,
        method: "POST",
      }),
      invalidatesTags: ["readingList"],
    }),
    deleteReadingListItem: builder.mutation<IResponse<IReadingList>, string>({
      query: (id) => ({
        url: `/reading-list/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["readingList"],
    }),
    finishedReadingList: builder.mutation<IResponse<IReadingList>, string>({
      query: (id) => ({
        url: `/reading-list/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["readingList"],
    }),
  }),
});

export const {
  useAddReadingListMutation,
  useDeleteReadingListItemMutation,
  useGetReadingListQuery,
  useFinishedReadingListMutation,
} = readingListApi;
export default readingListApi;
