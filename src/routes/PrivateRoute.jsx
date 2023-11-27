import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Spinner } from "@chakra-ui/react";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <Spinner />
      </div>
    );
  }
  if (user) return children;
  return <Navigate state={location.pathname} to={"/login"} />;
};

export default PrivateRoute;
