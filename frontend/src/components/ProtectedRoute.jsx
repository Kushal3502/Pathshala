import { Navigate } from "react-router-dom";
import useAuth from "@/context/AuthContext";

const RoleProtectedRoute = ({ children, allowedRole }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/auth/signin" />;
  }

  if (user.role !== allowedRole) {
    if (user.role === "student") return <Navigate to="/" />;
    return <Navigate to="/instructor" />;
  }

  return children;
};

export default RoleProtectedRoute;
