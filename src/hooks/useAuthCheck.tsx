import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/app/hooks";
import { userLoggedIn } from "../redux/features/auth/authSlice";
import authApi from "../redux/features/auth/authApi";

const useAuthCheck = () => {
  const dispatch = useAppDispatch();
  const [authChecked, setAuthChecked] = useState(false);
  const { user } = useAppSelector((state) => state.auth);

  useEffect(() => {
    const localAuth = localStorage.getItem("auth");
    const auth = localAuth !== null ? JSON.parse(localAuth) : null;
    if (auth?.accessToken) {
      dispatch(userLoggedIn(auth));
    }
    setAuthChecked(true);
  }, [dispatch]);

  useEffect(() => {
    if (authChecked && user.accessToken) {
      dispatch(authApi.endpoints.myProfile.initiate(undefined));
    }
  }, [authChecked, dispatch, user.accessToken]);

  return authChecked;
};

export default useAuthCheck;
