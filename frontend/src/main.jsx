import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthLayout, Instructor, Signin, Signup, Student } from "./pages";
import { AuthContextProvider } from "./context/AuthContext";
import RoleProtectedRoute from "./components/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "signin",
        element: <Signin />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "/",
    element: (
      <RoleProtectedRoute allowedRole="student">
        <Student />
      </RoleProtectedRoute>
    ),
  },
  {
    path: "/instructor",
    element: (
      <RoleProtectedRoute allowedRole="instructor">
        <Instructor />
      </RoleProtectedRoute>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <RouterProvider router={router} />
  </AuthContextProvider>
);
