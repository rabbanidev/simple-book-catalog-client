import { IResponse } from "../../../interface/generic";
import apiSlice from "../api/apiSlice";
import { IAuthResponse, IMyProfile } from "./authInterface";
import { myProfile, userLoggedIn } from "./authSlice";

const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<IResponse<IAuthResponse>, object>({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(_undeifined, { dispatch, queryFulfilled }) {
        try {
          const { data: loggedInData } = await queryFulfilled;
          localStorage.setItem("auth", JSON.stringify(loggedInData.data));
          dispatch(userLoggedIn(loggedInData.data));
        } catch (error) {
          console.log("Login error", error);
        }
      },
    }),
    signup: builder.mutation<IResponse<IAuthResponse>, object>({
      query: (data) => ({
        url: "/auth/signup",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(_undeifined, { dispatch, queryFulfilled }) {
        try {
          const { data: loggedInData } = await queryFulfilled;
          localStorage.setItem("auth", JSON.stringify(loggedInData.data));
          dispatch(userLoggedIn(loggedInData.data));
        } catch (error) {
          console.log("Login error", error);
        }
      },
    }),
    myProfile: builder.query<IResponse<IMyProfile>, undefined>({
      query: () => ({
        url: "/users/my-profile",
      }),
      async onQueryStarted(_undeifined, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(myProfile(data?.data));
        } catch (error) {
          console.log("Login error", error);
        }
      },
    }),
  }),
});

export const { useLoginMutation, useSignupMutation, useMyProfileQuery } =
  authApi;
export default authApi;
