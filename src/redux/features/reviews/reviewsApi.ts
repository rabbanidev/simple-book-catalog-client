import apiSlice from "../api/apiSlice";
import type { IResponse } from "../../../interface/generic";
import type { IReview } from "./reviewsInterface";

const reviewsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getReviews: builder.query<IResponse<IReview[]>, string>({
      query: (id) => ({
        url: `/reviews/${id}`,
      }),
      providesTags: ["reviews"],
    }),
    createReviw: builder.mutation<IResponse<IReview[]>, object>({
      query: ({ id, data }: { id: string; data: object }) => ({
        url: `/reviews/${id}`,
        body: data,
        method: "POST",
      }),
      invalidatesTags: ["reviews"],
    }),
  }),
});

export const { useGetReviewsQuery, useCreateReviwMutation } = reviewsApi;
export default reviewsApi;
