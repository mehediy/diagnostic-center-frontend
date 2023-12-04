import { Navigate, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Spinner } from "@chakra-ui/react";
import useBlocked from "../hooks/useBlocked";
import toast from "react-hot-toast";

const PrivateRoute = ({ children }) => {
  const { user, loading, logoutUser } = useAuth();
  const { isBlocked, isloading } = useBlocked();
  const navigate = useNavigate();

  const location = useLocation();
  if (loading || isloading) {
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <Spinner />
      </div>
    );
  }
  if (user && isBlocked) {
    logoutUser().then(() => {
      toast.error("Account Blocked");
      navigate("/");
    });
  }
  if (user && !isBlocked) return children;
  return <Navigate state={location.pathname} to={"/login"} />;
};

export default PrivateRoute;
