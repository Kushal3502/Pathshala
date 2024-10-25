import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Auth } from "./pages";
import { AuthContextProvider } from "./context/authContext";

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <Auth />,
  },
]);

createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <RouterProvider router={router} />
  </AuthContextProvider>
);
