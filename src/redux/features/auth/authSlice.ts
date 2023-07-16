import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { IAuth, IAuthResponse, IMyProfile } from "./authInterface";

const initialState: IAuth = {
  user: {
    id: null,
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
    myProfile: (state, action: PayloadAction<IMyProfile>) => {
      state.user.id = action.payload?.id as string;
    },
    userLoggedOut: (state) => {
      state.user.id = null;
      state.user.accessToken = null;
    },
  },
});

export const { userLoggedIn, userLoggedOut, myProfile } = authSlice.actions;

export default authSlice.reducer;
