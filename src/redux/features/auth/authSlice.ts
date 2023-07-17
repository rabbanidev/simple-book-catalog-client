import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { IAuth, IAuthResponse } from "./authInterface";

const initialState: IAuth = {
  user: {
    accessToken: null,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoggedIn: (state, action: PayloadAction<IAuthResponse>) => {
      state.user.accessToken = action.payload?.accessToken as string;
    },
    userLoggedOut: (state) => {
      state.user.accessToken = null;
    },
  },
});

export const { userLoggedIn, userLoggedOut } = authSlice.actions;

export default authSlice.reducer;
