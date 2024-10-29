import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  AddCourse,
  AuthLayout,
  Error,
  Instructor,
  Signin,
  Signup,
  Student,
} from "./pages";
import { AuthContextProvider } from "./context/AuthContext";
import RoleProtectedRoute from "./components/ProtectedRoute";
import { InstructorDashboard, InstructorCourses } from "./components";
import { InstructorContextProvider } from "./context/InstructorContext";

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
    children: [
      {
        path: "",
        element: <InstructorDashboard />,
      },
      {
        path: "courses",
        element: <InstructorCourses />,
      },
      {
        path: "add-course",
        element: <AddCourse />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <InstructorContextProvider>
      <RouterProvider router={router} />
    </InstructorContextProvider>
  </AuthContextProvider>
);
