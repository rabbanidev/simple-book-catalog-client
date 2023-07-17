import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "../redux/app/hooks";

const PrivateOutlet = () => {
  const location = useLocation();
  const { user } = useAppSelector((state) => state.auth);

  const isAccess = user?.accessToken;

  if (isAccess) {
    return <Outlet />;
  } else {
    return <Navigate to="/signin" state={{ from: location }} />;
  }
};

export default PrivateOutlet;
