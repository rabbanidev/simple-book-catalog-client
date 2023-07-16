import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IAuth, IPayloadAction } from "./authInterface";

const initialState: IAuth = {
  user: {
    accessToken: null,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoggedIn: (state, action: PayloadAction<IPayloadAction>) => {
      state.user.accessToken = action.payload?.accessToken as string;
    },
    userLoggedOut: (state) => {
      state.user.accessToken = null;
    },
  },
});

export const { userLoggedIn } = authSlice.actions;

export default authSlice.reducer;
