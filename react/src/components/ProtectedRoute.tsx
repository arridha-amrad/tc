import { Navigate, Outlet } from "react-router-dom";
import useMe from "../hooks/auth/useMe";
import Spinner from "./Spinner";

const ProtectedRoute = () => {
  const { isLoading, data } = useMe();
  if (isLoading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <Spinner className="w-16 h-16" />
      </div>
    );
  }
  if (data) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" replace />;
  }
};

export default ProtectedRoute;
