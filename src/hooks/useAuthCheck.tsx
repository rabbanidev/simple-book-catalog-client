import { useEffect, useState } from "react";
import { useAppDispatch } from "../redux/app/hooks";
import { userLoggedIn } from "../redux/features/auth/authSlice";

const useAuthCheck = () => {
  const dispatch = useAppDispatch();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const localAuth = localStorage.getItem("auth");
    const auth = localAuth !== null ? JSON.parse(localAuth) : null;
    if (auth?.accessToken) {
      dispatch(userLoggedIn(auth));
    }
    setAuthChecked(true);
  }, [dispatch]);

  return authChecked;
};

export default useAuthCheck;
