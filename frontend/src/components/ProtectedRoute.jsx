import { Navigate } from "react-router-dom";
import useAuth from "@/context/AuthContext";

const RoleProtectedRoute = ({ children, allowedRole }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/auth/signin" />;
  }

  if (user.role !== allowedRole) {
    return <Navigate to={user.role === "student" ? "/" : "/instructor"} />;
  }

  return children;
};

export default RoleProtectedRoute;
