import { IResponse } from "../../../interface/generic";
import apiSlice from "../api/apiSlice";
import { IAuthResponse } from "./authInterface";
import { userLoggedIn } from "./authSlice";

const authAPi = apiSlice.injectEndpoints({
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
  }),
});

export const { useLoginMutation, useSignupMutation } = authAPi;
export default authAPi;
