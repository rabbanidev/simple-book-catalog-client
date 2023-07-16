import apiSlice from "../api/apiSlice";
import type { IResponse } from "../../../interface/generic";
import type { IWishList } from "./wishlistInterface";

const wishlistApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getWishList: builder.query<IResponse<IWishList[]>, undefined>({
      query: () => ({
        url: "/wishlist",
      }),
      providesTags: ["wishlist"],
    }),
    addWishList: builder.mutation<IResponse<IWishList>, object>({
      query: (data) => ({
        url: "/wishlist/add",
        body: data,
        method: "POST",
      }),
      invalidatesTags: ["wishlist"],
    }),
    deleteWishListItem: builder.mutation<IResponse<IWishList>, string>({
      query: (id) => ({
        url: `/wishlist/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["wishlist"],
    }),
  }),
});

export const {
  useAddWishListMutation,
  useGetWishListQuery,
  useDeleteWishListItemMutation,
} = wishlistApi;
export default wishlistApi;
