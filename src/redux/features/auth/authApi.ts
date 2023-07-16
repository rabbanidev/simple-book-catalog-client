import { IResponse } from "../../../interface/generic";
import apiSlice from "../api/apiSlice";
import { IAuth } from "./authInterface";
import { userLoggedIn } from "./authSlice";

const authAPi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<IResponse<IAuth>, object>({
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
  }),
});

export const { useLoginMutation } = authAPi;
export default authAPi;
