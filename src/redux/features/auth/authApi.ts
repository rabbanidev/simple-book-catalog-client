import { IResponse } from "../../../interface/generic";
import apiSlice from "../api/apiSlice";
import { IAuthResponse, IUser } from "./authInterface";
import { setMyProfile, userLoggedIn } from "./authSlice";

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
    myProfile: builder.query<IResponse<IUser>, undefined>({
      query: () => ({
        url: "/users/my-profile",
      }),
      async onQueryStarted(_undeifined, { dispatch, queryFulfilled }) {
        try {
          const { data: myProfile } = await queryFulfilled;
          dispatch(setMyProfile(myProfile.data));
        } catch (error) {
          console.log("Get My profile error", error);
        }
      },
    }),
  }),
});

export const { useLoginMutation, useSignupMutation, useMyProfileQuery } =
  authApi;
export default authApi;
